class Home extends Factory
	constructor: ($log, anotherService) ->
		$log.info 'homeService instantiated'
		
class Greet extends Service
	constructor: ($log) ->
		$log.info 'greetService instantiated'
		
class Routes extends Config
	constructor: ($routeProvider) ->
		$routeProvider
		.when '/home',
			controller: 'homeController'