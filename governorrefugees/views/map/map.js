angular.module('map', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
   $routeProvider.when('/map', {
    templateUrl: 'views/map/map.html',
    controller: 'MapController'
   })
}])
.controller('MapController',['$scope', '$http', function($scope, $http){
  console.log('its getting here');

  


  $http.get("/data/governors.json", {cache: true})
    .error(function(err){
      console.error(err);
    })
    .success(function(data){
      console.log(data);
      $scope.governors = data;
      var stateObj = {}
      for(var key in data){
        var color;
        if(data[key].Party === 'Democratic'){
          color = 'blue'
        }else if(data[key].Party === 'Republican'){
          color = 'red';
        }else{
          color = 'yellow';
        }
        stateObj[key] = { fill : color }
      }
      $('#map').usmap({
        // The click action
        click: function(event, data) {
          if($scope.governors){
            // console.log($scope.governors[data.name]);
            $scope.selectedState = $scope.governors[data.name];
            $scope.$apply();
          }
            
        },
        stateStyles: {fill: 'white'},
        stateHoverStyles: {fill : 'green'},
        stateSpecificStyles : stateObj
          
      });
    })

}])