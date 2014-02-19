calcBuilder.service('calculationService', ['FIREBASEURL', '$firebase', function (firebaseURL, $firebase) {

    var fbURL = firebaseURL + '1/calculation/'
    var ref = new Firebase(fbURL);

    this.calulations = $firebase(ref);

    this.addNew = function (newCalculation) {

        this.calulations.$add(newCalculation);

    }

}]);