angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.getLinks = function () {
    $http.get('/api/links')
      .success(function(response) {
        $scope.data.links = response;
      });
  };
  $scope.getLinks();
})

.factory('Links', function () {
  var LinkInstance;

  return LinkInstance;
});
