(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                // templateUrl: 'templates/categories.template.html',
                // controller: 'CategoriesController as ctrl',
                //component: 'categories',
                template: '<categories items="$resolve.items"></categories>',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {                        
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{category}',
                // templateUrl: 'templates/items.template.html',
                // controller: 'ItemsController as ctrl',
                template: '<items items="$resolve.items"></items>',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {                                         
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            });



    }
})();