'use strict';
angular
	.module('lingu', ['ui.route','ui.bootstrap','smart-table'])
	.config(
			function($stateProvider, $urlRouterProvider){
				$stateProvider.state('app',{
												url : '/',
												abstract : true,
												views : {
													'chatWindow' : {
														templateUrl : '../../../dist/app/chat/chatWindow.html'
												
													}
												}
											})
			});