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
