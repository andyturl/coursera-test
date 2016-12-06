(function () {
    "use strict";

    angular.module('public').controller('SignUpController', SignUpController);

    function SignUpController() {
        var signUpCtrl = this;

        signUpCtrl.hello = function(){
            console.log('hi hi');            
        };
    }
})();