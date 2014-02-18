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
         })


calcBuilder.constant('FIREBASEURL', 'https://calulationbuilder.firebaseio.com/')
///#source 1 1 /app/calcEditor/ctrl.calcEditor.js
calcBuilder.controller('ctrl.calcEditor', ['$scope', '$state', function ($scope, $state) {



}])
///#source 1 1 /app/calcList/ctrl.calcList.js
calcBuilder.controller('ctrl.calcList', ['$scope', '$state', function ($scope, $state) {



}])
///#source 1 1 /app/dataItemList/ctrl.dataItemList.js
calcBuilder.controller('ctrl.dataItemList', ['$scope', '$state', function ($scope, $state) {



}])
