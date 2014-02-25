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
		        element.on('mouseover', 'var', function () {

		            if (this.childNodes[0] != null) {

		                //http://jsfiddle.net/timdown/4N4ZD/





		            //var deleteButton = document.createElement('a');
		            //deleteButton.classList.add('remove');
		            //deleteButton.classList.add('btn');
		            //deleteButton.innerHTML = 'Remove';

		            //this.appendChild(deleteButton);
		            }
		        });

		        element.on('mouseleave', 'var', function () {

		            this.removeChild(this.childNodes[1]);
		        });

		    });

		    ctrl.$setViewValue(element.html());
		}
	}
})
