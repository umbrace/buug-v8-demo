
angular.module("umbraco")
    .controller("My.MyContentApp", function ($scope, editorState, userService) {

        var vm = this;
        vm.CurrentNodeId = editorState.current.id;
        vm.CurrentNodeAlias = editorState.current.contentTypeAlias;

        var user = userService.getCurrentUser().then(function (user) {
            console.log(user);
            vm.UserName = user.name;
        });
    });
