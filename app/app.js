define([
	'angular', 'app.config',
	'angular-material', 'angular-animate', 'angular-aria', 'angular-ui-router',
	'articles/articles.module'
], function(angular, appConfig) {

	var appName = 'app',
		appDependencies = [
			'ngMaterial', 'ngAnimate', 'ngAria', 'ui.router', 'articles'
		];

	angular.module( appName, appDependencies).
		config( appConfig );

	angular.bootstrap( document, [ appName ]);
});