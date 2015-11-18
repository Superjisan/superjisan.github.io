angular.module('map', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
   $routeProvider.when('/map', {
    templateUrl: 'views/map/map.html',
    controller: 'MapController'
   })
}])
.controller('MapController',['$scope',function($scope){
  console.log('its getting here');

  $('#map').usmap({
    // The click action
    click: function(event, data) {
      $('#clicked-state')
        .text('You clicked: '+data.name)
        
    },
    stateStyles: {fill: 'white'},
    stateHoverStyles: {fill : 'red'}
  });

}])