(function () {
  "use strict";

  angular.module('common')
    .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath', '$q'];
  function MenuService($http, ApiPath, $q) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };


    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = { 'category': category };
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.validateFavourite = function (shortName) {
      var deffered = $q.defer();              
      $http.get(ApiPath + '/categories/' + shortName + '.json').then(function (response) {
        deffered.resolve('valid shortname');
        console.log('valid shortname');
      }, function (response) {
        deffered.reject('invalid shortname');
        console.log('invalid shortname');
      });
      return deffered.promise;

    };

  }



})();
