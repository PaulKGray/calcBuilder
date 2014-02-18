calcBuilder.service('dataItemService', ['FIREBASEURL', '$firebase', function (firebaseURL, $firebase) {

    var fbURL = firebaseURL + '1/dataItems/'
    var ref = new Firebase(fbURL);

    this.dataItems = $firebase(ref);

    this.addDataItem = function (newCalc) {

        this.Calulations.$add(newCalc);

    }

}]);