'use strict';

// Declare app level module which depends on views, and components
 angular.module('governors', [
   'ngRoute',
   'map'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/map'});
  }])
.run(['$rootScope', function($rootScope){
     

}]);