(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
        console.log('hi from categories');
        var ctrl = this;
        console.log(items);
        ctrl.items = items.data;
    }

})();