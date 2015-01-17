angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http,  $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function () {
    console.log($scope.link);
    $http.post('/api/links', $scope.link);
  };
});
