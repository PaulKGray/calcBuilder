calcBuilder.controller('ctrl.dataItem.Add', ['$scope', '$state', 'dataItemService', function ($scope, $state, dataItemService) {

	$scope.addNew = function () {

	    if ($scope.form.$valid){

	    var newDataItem = $scope.dataItem;

	    dataItemService.addDataItem(newDataItem);

	    $state.transitionTo('dataItemList');
	    }
	};

}])