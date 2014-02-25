calcBuilder.controller('ctrl.calcList.Add', ['$scope', '$state', 'calculationService', 'dataItemService', 'calculationEditorService', function ($scope, $state, calculationService, dataItemService, calculationEditorService) {
    $scope.calculation = { code: 'return ', calculation: ''};
    $scope.dataItems = dataItemService.dataItems;  
    $scope.calculations = calculationService.calulations;


    var bracketCount = 0;

    $scope.addRules = calculationEditorService.addRules;

    $scope.addNew = function () {

        var calulation = $scope.calculation;

        console.log('hello');

        console.log($scope.calculationView);

        calulation["display"] = $scope.calculationView;

        calculationService.addNew(calulation);

    };


    $scope.AddTag = function (tag, type) {

        var results = calculationEditorService.addNew(tag, type);

        $scope.calculation.code += results.codeTag;
        $scope.calculation.calculation += results.htmlTag;

    };

}])