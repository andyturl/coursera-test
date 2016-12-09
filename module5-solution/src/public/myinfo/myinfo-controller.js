(function () {
    "use strict";

    angular.module('public').controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['savedData'];
    function MyInfoController(savedData) {
        var myInfoCtrl = this;
        
        myInfoCtrl.savedData = savedData;


        // myInfoCtrl.getSavedData = function(){
        //     var data = SignUpService.getSavedData();
        //     myInfoCtrl.menu_item = data.favouriteDish;
        // };
    }
})();