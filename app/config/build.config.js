({
	baseUrl: "..",
	name: "app",
	out: "../../public/app.min.js",
	paths: {
		angular: "../bower_components/angular/angular",
		"angular-animate": "../bower_components/angular-animate/angular-animate",
		"angular-aria": "../bower_components/angular-aria/angular-aria",
		"angular-material": "../bower_components/angular-material/angular-material",
		"angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
		"angular-sanitize": "../bower_components/angular-sanitize/angular-sanitize",
		"showdown": "../bower_components/showdown/dist/showdown",
		"text": "../bower_components/requirejs-text/text"
	},
	shim: {
		'angular' : {'exports' : 'angular'}
	},
	priority: [
		"angular"
	],
	insertRequire: ['app']
})