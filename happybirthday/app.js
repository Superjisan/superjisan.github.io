'use strict';

// Declare app level module which depends on views, and components
 angular.module('happybirthday', [
   'ngRoute',
   'home'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
  }])
.run(['$rootScope', function($rootScope){
     

}]);