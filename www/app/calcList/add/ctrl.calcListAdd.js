calcBuilder.controller('ctrl.calcList.Add', ['$scope', '$state', 'calculationService', 'dataItemService', function ($scope, $state, calculationService, dataItemService) {
    $scope.calculation = { code: 'return ', calculation: ''};
    $scope.dataItems = dataItemService.dataItems;  
    $scope.calculations = calculationService.calulations;


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

        console.log('hello');

        console.log($scope.calculationView);

        calulation["display"] = $scope.calculationView;

        calculationService.addNew(calulation);

    };


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
                $scope.addRules.conditional =  false;
                $scope.addRules.bracketStart = false;


                if (bracketCount > 0) {

                    $scope.addRules.bracketEnd = true;

                }
 

                break;
             // Oprands
            case 2:

                htmlTag = '<code>' + AddTag + '</code>';
                javascriptTag = '' + AddTag + '';


                $scope.addRules.dataItem = true;
                $scope.addRules.operands = false;
                $scope.addRules.conditional = false;
                $scope.addRules.bracketStart = true;
                $scope.addRules.bracketEnd = false;


                break;
            // Bracket Start
            case 3:
                               
                htmlTag = '<code>' + AddTag + '</code>';
                javascriptTag = AddTag;
                bracketCount += 1;
                $scope.addRules.bracketEnd = true;
                $scope.addRules.dataItem = true;
                break;
            
            // Bracket End
            case 4:
              
                htmlTag = '<code>' + AddTag + '</code>';
                javascriptTag = AddTag;
                bracketCount -= 1;
                $scope.addRules.operands = false;
                $scope.addRules.conditional = false;

                if (bracketCount == 0) {

                    $scope.addRules.bracketEnd = false;

                }

                break;

            case 99:

                htmlTag = '<samp>' + AddTag + '</samp>';
                javascriptTag = 'calculation.' + AddTag;

                $scope.addRules.dataItem = false;
                $scope.addRules.operands = true;
                $scope.addRules.conditional = false;


            default:

        }
        $scope.calculation.code += javascriptTag;
        $scope.calculation.calculation += htmlTag


    };

}])