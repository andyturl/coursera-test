(function () {
    "use strict";

    angular.module('public').controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'SignUpService'];
    function SignUpController(MenuService, SignUpService) {
        var signUpCtrl = this;

        signUpCtrl.submit = function () {            
            MenuService.getMenuItem(signUpCtrl.favouriteDish.toUpperCase()).then(function (menuItem) {
                // success                
                console.log('success ', menuItem);
                signUpCtrl.invalidFavourite = false;
                var data = {
                    firstname : signUpCtrl.firstname,
                    lastname : signUpCtrl.lastname,
                    email : signUpCtrl.email,
                    phoneNumber : signUpCtrl.phoneNumber,
                    favouriteDish : menuItem
                };

                SignUpService.save(data);
            }, function (response) {
                // failed
                console.log('failed ', response);
                signUpCtrl.invalidFavourite = true;                
            });
        };
    }
})();
