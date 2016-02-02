(function(define){define(
	["angular", "showdown", "config/app.config", "articles/articles.config", "angular-sanitize", "angular-ui-router"],
	function(angular, showdown, appConfig, articlesConfig){
		angular.module("articles", ["ngSanitize"]).
			config(articlesConfig).
			value("githubRepo", "https://api.github.com/repos/hynding/angular-toybox/contents/").
			value("defaultArticle", "README.md").
			service("Markdown", [showdown.Converter]).
			factory("GithubFile", ["$http", "githubRepo", function($http, githubRepo){
				return {
					get: function(shortName) {
						return $http({
							method: 'GET',
							url: githubRepo + shortName,
							headers: {
								"Accept": "application/vnd.github.raw+json"
							}
						});
					}
				};
			}]).
			filter("markup", ["$sce", "Markdown", function($sce, Markdown){
				return function(input) {
					return Markdown.makeHtml(input);
				}
			}]).
			controller("ArticleCtrl", ["GithubFile", "Markdown", "defaultArticle", function(GithubFile, Markdown, defaultArticle){
				var self = this;
				self.content = "Loading...";
				GithubFile
					.get( defaultArticle )
					.then(
						function(response){
							self.content = response.data;
						}
					);
			}]);
	});
})(define);