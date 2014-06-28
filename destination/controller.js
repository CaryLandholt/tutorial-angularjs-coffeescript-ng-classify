var Greet, Home, Routes;
Home = function () {
  function Home($log, anotherService) {
    $log.info('homeService instantiated');
  }
  return Home;
}();
Greet = function () {
  function Greet($log) {
    $log.info('greetService instantiated');
  }
  return Greet;
}();
Routes = function () {
  function Routes($routeProvider) {
    $routeProvider.when('/home', { controller: 'homeController' });
  }
  return Routes;
}();
angular.module('app').factory('Home', [
  '$log',
  'anotherService',
  Home
]);
angular.module('app').service('greetService', [
  '$log',
  Greet
]);
angular.module('app').config([
  '$routeProvider',
  Routes
]);