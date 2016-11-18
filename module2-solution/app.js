(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyController = this;

        toBuyController.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuyController.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtController = this;

        alreadyBoughtController.items = ShoppingListCheckOffService.getItemsAlreadyBought();
    }


    function ShoppingListCheckOffService() {
        var service = this,
            itemsToBuy = [{
                name: "cookies",
                quantity: 10
            },
            {
                name: "bananas",
                quantity: 5
            },
            {
                name: "grapes",
                quantity: 15,
            },
            {
                name: "milk",
                quantity: 1,
            },
            {
                name: "flour",
                quantity: 3,
            }],
            itemsBought = [];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsAlreadyBought = function () {
            return itemsBought;
        };

        service.buyItem = function (itemIndex) {
            itemsBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        };

    }

})();