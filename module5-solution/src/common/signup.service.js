(function () {
    "use strict";

    angular.module('common')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$q'];
    function SignUpService($q) {
        var service = this;

        service.save = function (data) {
            service.data = data;
        };

        service.getSavedData = function () {
            var defered = $q.defer();

            if (service.data) {
                defered.resolve(service.data);
            } else {
                defered.reject('no data');
            }

            return defered.promise;

        };
    }
})();