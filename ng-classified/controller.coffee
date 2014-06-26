class App
	constructor: ->
		return [
			'ngAnimate'
			'ngRoute'
		]
		
class MyValue
	constructor: ->
		return 'Cary'

angular.module 'app', App()
angular.module('app').value 'myValue', MyValue()