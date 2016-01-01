angular.module('home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
   $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeController'
   })
}])
.controller('HomeController',['$scope', '$http', function($scope, $http){

}])