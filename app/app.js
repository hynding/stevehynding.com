define(["angular", "angular-material", "angular-animate", "angular-aria", "articles/articles.module"], function(angular) {
	angular.module("app", ["ngMaterial", "ngAnimate", "ngAria", "ui.router", "articles"]).
		config(["$mdThemingProvider", function($mdThemingProvider){
			$mdThemingProvider.theme("default").
				primaryPalette("blue-grey").
				dark();
		}]);

	angular.bootstrap(document, ["app"]);
})