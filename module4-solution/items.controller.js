(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var ctrl = this;
        console.log(items);
        ctrl.items = items.data.menu_items;
        ctrl.category = items.data.category;
    }

})();