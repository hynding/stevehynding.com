"use strict";
(function(require){

	require.config({
		paths: {
			"angular": "../bower_components/angular/angular",
			"angular-animate": "../bower_components/angular-animate/angular-animate",
			"angular-aria": "../bower_components/angular-aria/angular-aria",
			"angular-material": "../bower_components/angular-material/angular-material",
			"angular-sanitize": "../bower_components/angular-sanitize/angular-sanitize",
			"angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
			"less": "../bower_components/less/dist/less",
			"text": "../bower_components/requirejs-text/text",
			"pretender": "../bower_components/pretender/pretender",
			"showdown": "../bower_components/showdown/dist/showdown"
		},
		shim: {
			"angular" : {"exports" : "angular"},
			"angular-animate": {
				deps:["angular"],
				"exports":"ngAnimate"
			},
			"angular-aria": {
				deps:["angular"],
				"exports":"ngAria"
			},
			"angular-material": {
				deps:["angular"],
				"exports":"ngMaterial"
			},
			"angular-sanitize": {
				deps:["angular"],
				"exports":"ngSanitize"
			},
			"angular-ui-router": {
				deps:["angular"],
				"exports":"uiRouter"
			},
			"angular-mocks": {
				deps:["angular"],
				"exports":"angular.mock"
			}
		}
	});

	require(["app"]);
})(require);