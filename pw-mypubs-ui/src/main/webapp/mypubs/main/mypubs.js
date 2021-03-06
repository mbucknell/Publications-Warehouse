(function() {


var mypubs = angular.module('pw.mypubs', [
		'ngRoute', 'ngGrid', 'ngCookies', 'ui.select2','ui.bootstrap', 'ui.tinymce', 'ui.sortable',// angular util modules
		'ui.bootstrap.datetimepicker', //datetimepicker
		'pw.auth', 'pw.notify',// pw util modules
		'pw.search', 'pw.publication', 'pw.editContributor' // mypubs pages
	])
	.controller('mainCtrl', ['$scope', 'AuthService',
		function ($scope, AuthService) {
			$scope.show = function(show) {
				if ( angular.isUndefined(show) ) {
					return $scope._show;
				}
				return $scope._show = show;
			};

			$scope.logout = function() {
				AuthService.logout();
			};
	}])
	.config(['$routeProvider', '$httpProvider',
	     	function($routeProvider, $httpProvider) {
	     		$routeProvider.otherwise({
	     			redirectTo: '/Search'
	     		});

	     		$httpProvider.interceptors.push('AuthorizationInterceptor');
	     	}
	     ])
	// nice utility directive
	.directive('preventDefault', function() {
		return function(scope, element, attrs) {
			$(element).click(function(event) {
				event.preventDefault();
			});
		};
	});

	if(angular.isDefined(window.PUBS) && angular.isDefined(PUBS.constants)){
		mypubs.constant('APP_CONFIG', PUBS.constants); //this is a bit of a hack/magic. This constant is injected into the HTML using JSP (index.jsp + constants.jsp)
	}
}) ();
