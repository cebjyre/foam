/**
 * @license
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

CLASS({
  name: 'CachingDAO',
  package: 'foam.dao',

  extendsModel: 'foam.dao.ProxyDAO',

  requires: ['foam.dao.FutureDAO'],
  
  properties: [
    {
      name: 'src'
    },
    {
      name: 'cache',
      help: 'Alias for delegate.',
      getter: function() { return this.delegate },
      setter: function(dao) { this.delegate = dao; }
    },
    {
      name: 'model',
      defaultValueFn: function() { return this.src.model || this.cache.model; }
    }
  ],

  methods: {
    init: function() {
      this.SUPER();

      var src   = this.src;
      var cache = this.cache;

      var futureDelegate = afuture();
      this.cache = this.FutureDAO.create({future: futureDelegate.get});

      src.select(cache)(function() {
        // Actually means that cache listens to changes in the src.
        src.listen(cache);
        futureDelegate.set(cache);
        this.cache = cache;
      }.bind(this));
    },
    put: function(obj, sink) { this.src.put(obj, sink); },
    remove: function(query, sink) { this.src.remove(query, sink); },
    removeAll: function(sink, options) { return this.src.removeAll(sink, options); }
  }
});

