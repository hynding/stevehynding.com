define(["text!articles/articles.html", "angular-ui-router"],
function(articlesHtml){

	return ["$stateProvider", "$urlRouterProvider", ArticlesConfig];

	function ArticlesConfig($stateProvider) {

			$stateProvider
				.state("home", {
					url: "/",
					template: articlesHtml
				});
	}
});