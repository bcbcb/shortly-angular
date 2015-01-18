angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, $timeout, Links, Auth) {
  $scope.signout = function () {
    Auth.signout($scope.user);
  };

  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks()
      .then( function (res) {
        $scope.data = res.data;
      });
  };

  $timeout(function () {
    $scope.getLinks();
  }, 100);

});

