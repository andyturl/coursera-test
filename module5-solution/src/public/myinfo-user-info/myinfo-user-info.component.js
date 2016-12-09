(function () {
  "use strict";

  angular.module('public')
    .component('userInfo', {
      templateUrl: 'src/public/myinfo-user-info/myinfo-user-info.html',
      bindings: {
        userInfo: '<'
      },
      controller: UserInfoController
    });


  UserInfoController.$inject = ['ApiPath'];
  function UserInfoController(ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
    console.log('hi ', $ctrl);
  }

})();
