calcBuilder.service('spendingService', ['FIREBASEURL', '$firebase', function (firebaseURL, $firebase) {

    var fbURL = firebaseURL + '1/calcs/'
    var ref = new Firebase(fbURL);

    this.Calulations = $firebase(ref);

    this.addCalc = function (newCalc) {

        this.Calulations.$add(newCalc);

    }

}]);