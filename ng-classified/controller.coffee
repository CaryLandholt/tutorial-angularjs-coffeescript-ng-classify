class Home
	constructor: ($log, anotherService) ->
		$log.info 'homeService instantiated'
		
class Greet
	constructor: ($log) ->
		$log.info 'greetService instantiated'
		
class Routes
	constructor: ($routeProvider) ->
		$routeProvider
		.when '/home',
			controller: 'homeController'

angular.module('app').factory 'Home', ['$log', 'anotherService', Home]
angular.module('app').service 'greetService', ['$log', Greet]
angular.module('app').config ['$routeProvider', Routes]