(function () {
    "use strict";

    angular.module('public').controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService', 'SignUpService'];
    function MyInfoController(MenuService, SignUpService) {
        var myInfoCtrl = this;


    }
})();