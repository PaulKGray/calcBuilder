calcBuilder.controller('ctrl.calcList', ['$scope', '$state', 'calculationService', function ($scope, $state, calculationService) {

    $scope.calculations = calculationService.calulations;

    console.log($scope.calculations);

}])