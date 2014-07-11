describe("pw.publication module", function(){

	var scope


	it('should have a pubs publication module pw.publication', function() {
		// angular should find a defined mod
		module('pw.publication')
		var def = true
		try {
			angular.module('pw.publication')
		} catch(e) {
			def = false
		}
		expect( def ).toBeTruthy()
	});


	it('should have fetched the publication given by the routeParams', function() {

		var routeParams = {pubsid:"asdf"}
		var pubsFetcher = {
			getById : jasmine.createSpy('getById'),
			get     : jasmine.createSpy('get'),
		}

		angular.module('mock.angular',[])
		.value('$routeParams',routeParams)
		.value('PublicationFetcher',pubsFetcher)

		module('pw.publication')

		inject (['$rootScope', '$controller', function($rootScope, $controller) {

			scope = $rootScope.$new()

			$controller('publicationCtrl', {
				'$scope': scope,
				'$routeParams': routeParams,
				'PublicationFetcher': pubsFetcher
			})

			expect(pubsFetcher.getById).toHaveBeenCalledWith('asdf')
			expect(scope.tabs).toBeDefined()
			expect( angular.isObject(scope.tabs) ).toBeTruthy()
		}])

	});


})
