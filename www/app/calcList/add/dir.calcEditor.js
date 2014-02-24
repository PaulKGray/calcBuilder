calcBuilder.directive('calceditor', function () {
	return {
	    restrict: 'A',
        require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {

		    ctrl.$render = function () {
		        element.html(ctrl.$viewValue);
		    };

		    $(function () {

			    //console.log(element);
		        element.on('blur', function () {

		            scope.$apply(function () {

		                ctrl.$setViewValue(element.html());

		            });

		        });
			    element.on('mouseover', 'var', function () { alert(this) });

		    });

		    ctrl.$setViewValue(element.html());
		}
	}
})
