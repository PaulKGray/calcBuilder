///#source 1 1 /app/app.js
var calcBuilder = angular.module('calcBuilder', ['ui.router','firebase'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/calcList");

        $stateProvider
        .state('calcList', {
            url: "/calcList",
            templateUrl: "app/calcList/tpl.calcList.html",
            controller: "ctrl.calcList"
        })
        .state('calcListAdd', {
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
calcBuilder.service('spendingService', ['FIREBASEURL', '$firebase', function (firebaseURL, $firebase) {

    var fbURL = firebaseURL + '1/calcs/'
    var ref = new Firebase(fbURL);

    this.Calulations = $firebase(ref);

    this.addCalc = function (newCalc) {

        this.Calulations.$add(newCalc);

    }

}]);
///#source 1 1 /app/services/svc.dataitems.js
calcBuilder.service('dataItemService', ['FIREBASEURL', '$firebase', function (firebaseURL, $firebase) {

    var fbURL = firebaseURL + '1/dataItems/'
    var ref = new Firebase(fbURL);

    this.dataItems = $firebase(ref);

    this.addDataItem = function (newCalc) {

        this.Calulations.$add(newCalc);

    }

}]);
///#source 1 1 /app/calcEditor/ctrl.calcEditor.js
calcBuilder.controller('ctrl.calcEditor', ['$scope', '$state', function ($scope, $state) {



}])
///#source 1 1 /app/calcList/ctrl.calcList.js
calcBuilder.controller('ctrl.calcList', ['$scope', '$state', function ($scope, $state) {



}])
///#source 1 1 /app/calclist/add/ctrl.calclistadd.js
calcBuilder.controller('ctrl.calcList.Add', ['$scope', '$state', function ($scope, $state) {



}])
///#source 1 1 /app/dataItemList/ctrl.dataItemList.js
calcBuilder.controller('ctrl.dataItemList', ['$scope', '$state', function ($scope, $state) {



}])
///#source 1 1 /app/dataitemlist/add/ctrl.dataitemadd.js
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
