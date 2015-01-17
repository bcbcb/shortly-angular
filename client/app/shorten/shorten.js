angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http,  $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function () {
    $scope.link.url = $scope.url;
    console.log($scope.link);
    $http.post('/api/links', $scope.link)
    .success(function() {
      $location.path('/');
    });
    // $scope.shorten = '';
  };
});
