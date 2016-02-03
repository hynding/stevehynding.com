'use strict';

define([
	'config/global.config',
	'articles/articles.module',
	'angularMocks'
], function(globalConfig){

	describe('Articles', function() {

		var ArticlesController, defaultArticle;

		beforeEach(module('leaderboards'));

		beforeEach(inject(function($controller, _$state_, $rootScope, $q, $templateCache){


		}));

		describe('index', function(){
			it('indicates loading default article', function(){
				expect(ArticlesController.defaultMarkdown).toBe('###Loading...');
			});

			it('indicates error if problem loading article', function(){
				expect(ArticlesController.defaultMarkup).toBe('There was a problem loading the page');
			});

			it('loads from configured GitHub API', function(){
				expect($httpBackend.url).toBe(githubPath);
			});

			it('loads a configured default article', function(){
				expect($httpBackend.url).toContain(defaultArticle);
			});

		});
	});
});