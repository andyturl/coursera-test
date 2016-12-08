(function () {
    "use strict";

    angular.module('public').controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'SignUpService'];
    function SignUpController(MenuService, SignUpService) {
        var signUpCtrl = this;

        signUpCtrl.submit = function () {
            MenuService.validateFavourite(signUpCtrl.favouriteDish).then(function (response) {
                // success
                console.log('success ', response);
                signUpCtrl.invalidFavourite = false;
                SignUpService.save();
            }, function (response) {
                // failed
                console.log('failed ', response);
                signUpCtrl.invalidFavourite = true;                
            });
        };
    }
})();
