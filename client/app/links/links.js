angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links, Auth) {
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

  $scope.getLinks();

});

