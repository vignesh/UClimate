angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('MoviesCtrl', function($scope, $http) {
  $scope.uc = [];

  $http.get('http://api.openweathermap.org/data/2.5/group?id=5327684,5341704,5359777,5368361,5372253,5387877,5363943,5391959,5392952,5393052,1&units=imperial&APPID=5c564884182b49fb7bf1e723b92c2051', {cache: true})
        .then(function(response) {
          $scope.uc = response.data;
          console.log(response)
          //return response.data.dt;
  });
})

