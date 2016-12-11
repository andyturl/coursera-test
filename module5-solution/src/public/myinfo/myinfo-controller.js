(function () {
    "use strict";

    angular.module('public').controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['savedData'];
    function MyInfoController(savedData) {
        var myInfoCtrl = this;
        
        myInfoCtrl.savedData = savedData;
    }
})();