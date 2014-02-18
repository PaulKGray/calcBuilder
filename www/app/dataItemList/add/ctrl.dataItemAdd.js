calcBuilder.controller('ctrl.dataItem.Add', ['$scope', '$state', 'dataItemService', function ($scope, $state, dataItemService) {

	$scope.add = function () {

		var newDataItem = {
			Name: $scope.dataItem.name,
			Description: $scope.dataItem.description,
			Type: $scope.dataItem.type,
		}

		dataItemService.addDataItem(newDataItem)

	};

}])