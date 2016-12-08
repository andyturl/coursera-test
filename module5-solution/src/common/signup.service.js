(function () {
    "use strict";

    angular.module('common')
        .service('SignUpService', SignUpService);

    function SignUpService() {
        var service = this;
        
        service.save = function(data) {
            console.log('saving...');
        };
    }
})();