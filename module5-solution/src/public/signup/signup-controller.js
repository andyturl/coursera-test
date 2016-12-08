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
                var data = {
                    firstname : signUpCtrl.firstname,
                    lastname : signUpCtrl.lastname,
                    email : signUpCtrl.email,
                    phoneNumber : signUpCtrl.phoneNumber,
                    favouriteDish : signUpCtrl.favouriteDish
                }

                SignUpService.save(data);
            }, function (response) {
                // failed
                console.log('failed ', response);
                signUpCtrl.invalidFavourite = true;                
            });
        };
    }
})();
