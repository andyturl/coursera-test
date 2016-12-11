(function () {
    "use strict";

    angular.module('common')
        .directive('menuItemValidator', MenuItemValidator);

    MenuItemValidator.$inject = ['MenuService'];
    function MenuItemValidator(MenuService) {

    }
})();