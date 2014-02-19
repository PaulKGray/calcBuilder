calcBuilder.controller('ctrl.dataItemList', ['$scope', '$state', 'dataItemService', function ($scope, $state, dataItemService) {

    $scope.dataItems = dataItemService.dataItems;

}])