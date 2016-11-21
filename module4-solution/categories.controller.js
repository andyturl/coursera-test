(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
        var ctrl = this;
        console.log(items);
        ctrl.items = items.data;
    }

})();