(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('CONFIG', { url: 'https://davids-restaurant.herokuapp.com/menu_items.json' });

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var search = this;

        search.searchTerm = "";

        search.narrowItDown = function () {
            if (search.searchTerm && search.searchTerm.trim().length > 0) {
                var promise = MenuSearchService.getMatchedMenuItems(search.searchTerm.trim());

                promise.then(function (foundItems) {
                    search.found = foundItems;
                });
            } else {
                search.found = [];
            }
        };

        search.removeItem = function (index) {
            search.found.splice(index, 1);
        };

    }


    MenuSearchService.$inject = ['$http', 'CONFIG'];
    function MenuSearchService($http, CONFIG) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                url: CONFIG.url
            }).then(function (result) {
                var foundItems = [];
                for (var i = 0; i < result.data.menu_items.length; i++) {
                    if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                        foundItems.push(result.data.menu_items[i]);
                    }
                }
                return foundItems;
            });
        };
    }

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'founditems.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var list = this;

        list.anyItems = function () {
            return list.foundItems && list.foundItems.length > 0;
        };
    }

})();