var App, MyValue;
App = function () {
  function App() {
    return [
      'ngAnimate',
      'ngRoute'
    ];
  }
  return App;
}();
MyValue = function () {
  function MyValue() {
    return 'Cary';
  }
  return MyValue;
}();
angular.module('app', App());
angular.module('app').value('myValue', MyValue());