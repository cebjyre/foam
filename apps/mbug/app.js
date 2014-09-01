var mbug;

window.onload = function() {
  var Y = bootCORE(Application.create({
    name: 'MBug'
  }));

  aseq(apar(arequire('Action'),
            arequire('Arg'),
            arequire('Method'),
            arequire('Interface'),
            arequire('Template'),
            arequire('Relationship'),
            arequire('AutocompleteView'),
            arequire('WindowHashValue'),
            arequire('AutocompleteListView'),
            arequire('VerticalScrollbarView'),
            arequire('ActionSheetView'),
            arequire('StackView'),
            arequire('GridView'),
            arequire('ScrollView'),
            arequire('Expr'),
            arequire('AbstractDAO'),
            arequire('DAOController'),
            arequire('DAOCreateController'),
            arequire('OAuth2ChromeIdentity'),
            arequire('OAuth2ChromeApp'),
            arequire('AddBookmarkDialog'),
            arequire('TextFieldView'),
            arequire('View'),
            arequire('AppController'),
            arequire('MDMonogramStringView'),
            arequire('CursorView'),
            arequire('QIssueDetailView'),
            arequire('QIssueCommentCreateView'),
            arequire('QIssueCommentUpdateDetailView'),
            arequire('QIssueTileView'),
            arequire('ConfigureProjectsView'),
            arequire('MementoMgr'),
            arequire('Browser'),
            arequire('PriorityView'),
            arequire('PriorityCitationView'),
            arequire('IssueView'),
            arequire('IssueEmailArrayView'),
            arequire('IssuePersonCitationView'),
            arequire('IssueEmailCitationView'),
            arequire('IssueOwnerAvatarView'),
            arequire('IssueCitationView'),
            arequire('CommentView'),
            arequire('ChangeProjectView'),
            arequire('IssueOwnerView'),
            arequire('IssueOwnerEditView'),
            arequire('Application'),
            arequire('IDBDAO'),
            arequire('DAOVersion'),
            arequire('MBug'),
            arequire('QBug'),
            arequire('PersistentContext'),
            arequire('Binding'),
            arequire('RestDAO'),
            arequire('TouchManager'),
            arequire('GestureManager'),
            arequire('ScrollGesture'),
            arequire('TapGesture'),
            arequire('DragGesture'),
            arequire('PinchTwistGesture'),
            arequire('DetailView'),
            arequire('OAuth2'),
            arequire('OAuthXhrFactory')),
       function(ret) {
         mbug = Y.MBug.create();
         document.body.innerHTML = mbug.toHTML();
         mbug.initHTML();
         ret();
       })(function(){});
};