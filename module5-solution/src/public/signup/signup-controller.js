(function () {
    "use strict";

    angular.module('public').controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        var signUpCtrl = this;

        signUpCtrl.submit = function(){
            MenuService.validateFavourite(signUpCtrl.favouriteDish).then(function(response){
                // success
                console.log('success');
            }, function(response){
                // failed
                console.log('failed');
            });
        };
    }
})();
