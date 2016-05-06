({
	baseUrl: "..",
	name: "app",
	out: "../../public/app.min.js",
	mainConfigFile: "require.config.js",
	priority: [
		"angular"
	],
	insertRequire: ['app']
})