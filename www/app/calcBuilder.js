﻿///#source 1 1 /app/app.js
var calcBuilder = angular.module('calcBuilder', ['ui.router','firebase'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/calcList");

        $stateProvider
        .state('calcList', {
            url: "/calcList",
            templateUrl: "app/calcList/tpl.calcList.html",
            controller: "ctrl.calcList"
        })
        .state('calcListadd', {
            url: "/calcListAdd",
            templateUrl: "app/calcList/add/tpl.calcListAdd.html",
            controller: "ctrl.calcList.Add"
        })

        .state('calcEditor', {
            url: "/calcEditor",
            templateUrl: "app/calcEditor/tpl.calcEditor.html",
            controller: "ctrl.calcEditor"
        })

        .state('dataItemList', {
            url: "/dataItemList",
            templateUrl: "app/dataItemList/tpl.dataItemList.html",
            controller: "ctrl.dataItemList"
            })
        .state('dataItemAdd', {
            url: "/dataItemAdd",
            templateUrl: "app/dataItemList/add/tpl.dataItemAdd.html",
            controller: "ctrl.dataItem.Add"
        })
    })

calcBuilder.constant('FIREBASEURL', 'https://calulationbuilder.firebaseio.com/')
///#source 1 1 /app/services/svc.calculations.js
calcBuilder.service('calculationService', ['FIREBASEURL', '$firebase', function (firebaseURL, $firebase) {

    var fbURL = firebaseURL + '1/calculation/'
    var ref = new Firebase(fbURL);

    this.calulations = $firebase(ref);

    this.addNew = function (newCalculation) {

        this.calulations.$add(newCalculation);

    }

}]);
///#source 1 1 /app/services/svc.dataitems.js
calcBuilder.service('dataItemService', ['FIREBASEURL', '$firebase', function (firebaseURL, $firebase) {

    var fbURL = firebaseURL + '1/dataItems/'
    var ref = new Firebase(fbURL);

    this.dataItems = $firebase(ref);

    this.addDataItem = function (newCalc) {

        this.dataItems.$add(newCalc);

    }

}]);
///#source 1 1 /app/filter/htmltrusted.js
calcBuilder.filter('to_trusted', ['$sce', function ($sce) {
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
///#source 1 1 /app/calclist/add/dir.calceditor.js
calcBuilder.directive('calceditor', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs, ngModelCtrl) {
			$(function () {

			    console.log(element);



			    element.on('mouseover', 'var', function () { alert(this) });

			});
		}
	}
})

///#source 1 1 /app/calcEditor/ctrl.calcEditor.js
calcBuilder.controller('ctrl.calcEditor', ['$scope', '$state', function ($scope, $state) {



}])
///#source 1 1 /app/calcList/ctrl.calcList.js
calcBuilder.controller('ctrl.calcList', ['$scope', '$state', 'calculationService', function ($scope, $state, calculationService) {

    $scope.calculations = calculationService.calulations;

    console.log($scope.calculations);

}])
///#source 1 1 /app/calclist/add/ctrl.calclistadd.js
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
///#source 1 1 /app/dataItemList/ctrl.dataItemList.js
calcBuilder.controller('ctrl.dataItemList', ['$scope', '$state', 'dataItemService', function ($scope, $state, dataItemService) {

    $scope.dataItems = dataItemService.dataItems;

}])
///#source 1 1 /app/dataitemlist/add/ctrl.dataitemadd.js
calcBuilder.controller('ctrl.dataItem.Add', ['$scope', '$state', 'dataItemService', function ($scope, $state, dataItemService) {

	$scope.addNew = function () {

	    if ($scope.form.$valid){

	    var newDataItem = $scope.dataItem;

	    dataItemService.addDataItem(newDataItem);

	    $state.transitionTo('dataItemList');
	    }
	};

}])
