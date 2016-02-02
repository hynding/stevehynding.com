"use strict";
(function(require){
	var baseUrl = ".";

	function getBowerPath(dirs, min, PS) {
		dirs = typeof dirs === "string" ? [dirs, dirs]: dirs;
		dirs.unshift("bower_components");
		dirs.unshift("..");

		return dirs.join(PS||"/") + (min?".min":"");
	}

	var paths = {
		"angular":
			getBowerPath("angular"),
		"angular-animate":
			getBowerPath("angular-animate"),
		"angular-aria":
			getBowerPath("angular-aria"),
		"angular-material":
			getBowerPath("angular-material"),
		"angular-sanitize":
			getBowerPath("angular-sanitize"),
		"angular-ui-router":
			getBowerPath(["angular-ui-router", "release", "angular-ui-router"]),
		"less":
			getBowerPath(["less", "dist", "less"]),
		"text":
			getBowerPath(["requirejs-text", "text"]),
		"pretender":
			getBowerPath(["pretender", "pretender"]),
		"showdown":
			getBowerPath(["showdown", "dist", "showdown"])
	};

	require.config({
		baseUrl: baseUrl,
		paths: paths,
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