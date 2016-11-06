(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.lunch = '';

        $scope.message = '';

        $scope.messageClass = '';

        $scope.textboxClass = '';

        $scope.performCheck = function() {
            var items = [],
                emptyDataMessage = 'Please enter data first',
                enjoyMessage = 'Enjoy!',
                tooMuchMessage = 'Too much!';

            if ($scope.lunch && $scope.lunch.length > 0) {
                items = $scope.lunch.split(',');
                items = removeEmptyItems(items);
                
                if (items.length === 0) {
                    $scope.message = emptyDataMessage;
                } else if (items.length <= 3) {
                    // ok
                    $scope.message = enjoyMessage;
                } else if (items.length > 3) {
                    // too many
                    $scope.message = tooMuchMessage;
                }
            } else {
                $scope.message = emptyDataMessage;
            }
            
            if ($scope.message ===  emptyDataMessage) {
                    $scope.messageClass = 'invalid-message';
                    $scope.textboxClass = 'invalid-text';
            } else {
                    $scope.messageClass = 'valid-message';
                    $scope.textboxClass = 'valid-text';
            }

        };

        // removes any items that are empty from the array
        function removeEmptyItems(items) {
            var i;
            
            for (i = 0; i < items.length; i++) {
                if (items[i].trim().length === 0){
                    items.splice(i, 1);
                    i--;
                }
            }
            return items;
        }

    };

})();