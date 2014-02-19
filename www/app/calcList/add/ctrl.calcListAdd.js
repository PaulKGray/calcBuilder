calcBuilder.controller('ctrl.calcList.Add', ['$scope', '$state', 'calculationService', 'dataItemService', function ($scope, $state, calculationService, dataItemService) {
    $scope.calculation = { calculation: 'return '};
    $scope.dataItems = dataItemService.dataItems;


    var bracketCount = 0;

    $scope.addRules = {

        dataItem: true,
        operands: false,
        bracketStart: true,
        bracketEnd: false,
        conditional: true,

    };


    $scope.addNew = function () {

        var calulation = $scope.calculation;

        calculationService.addNew(calulation);

    };

    $scope.calculationHtml = ' ';

    $scope.AddTag = function (AddTag, type) {

        var javascriptTag
        var htmlTag;

        switch (type) {
            // DataItem
            case 1:

                htmlTag = '<var>' + AddTag + '</var>';
                javascriptTag = 'dataItem.' + AddTag;

                $scope.addRules.dataItem = false;
                $scope.addRules.operands = true;
                $scope.addRules.conditional=  false;

 

                break;
             // Oprands
            case 2:

                htmlTag = '<code>' + AddTag + '</code>';
                javascriptTag = '' + AddTag + '';


                $scope.addRules.dataItem = true;
                $scope.addRules.operands = false;
                $scope.addRules.conditional = false;

                if (bracketCount > 0) {

                    $scope.addRules.bracketEnd = true;

                }


                break;
            // Bracket Start
            case 3:

                htmlTag = '<mark>' + AddTag + '</mark>';
                javascriptTag = AddTag;
                bracketCount += 1;
                $scope.addRules.bracketEnd = true;

                break;
            
            // Bracket End
            case 4:
              
                htmlTag = '<mark>' + AddTag + '</mark>';
                javascriptTag = AddTag;
                bracketCount -= 1;
                $scope.addRules.operands = false;
                $scope.addRules.conditional = false;

                if (bracketCount == 0) {

                    $scope.addRules.bracketEnd = false;

                }

                break;

            default:

        }
        $scope.calculation.calculation += javascriptTag;
        $scope.calculationHtml += htmlTag


    };

}])