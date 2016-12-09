(function () {
    "use strict";

    angular.module('common')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$q'];
    function SignUpService($q) {
        var service = this;
        
        service.save = function(data) {
            console.log('saving...');
            service.data = data;
            console.log(data);
        };

        service.getSavedData = function() {
            console.log('getting saved data...');
            var defered = $q.defer();
            if (service.data) {
                console.log('found resolving');
                defered.resolve(service.data);
            } else {
                console.log('error not found');
                defered.reject('no data');
            }

            return defered.promise;
            
        };
    }
})();