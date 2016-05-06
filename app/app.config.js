define([], function() {

	appConfig.$inject = ['$mdThemingProvider', '$urlRouterProvider'];

	return appConfig;

	function appConfig($mdThemingProvider) {

		setupDefaultRouting();
		setupDefaultTheming();

		function setupDefaultRouting() {
			$urlRouterProvider.otherwise("/");
		}

		function setupDefaultTheming() {
			$mdThemingProvider
				.theme( 'default' )
				.primaryPalette( 'blue-grey' )
				.dark()
			;
		}
	}
});