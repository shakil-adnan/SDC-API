var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "Post.html"
    })
    .when("/user", {
      templateUrl: "User.html"
    })
    .when("/NewUser/:id", {
      templateUrl: "NewUser.html",
      controller:"newUserCltr"
    })
    .when("/NewUser", {
      templateUrl: "NewUser.html",
      controller:"newUserCltr"
    })
    .when("/posts", {
      templateUrl: "Post.html"
    });
});

app.controller("postCltr", function ($scope, $http) {
  $scope.role = 'posts';
  $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      if (response && response.data) {
        $scope.posts = response.data;
        $scope.loded = true;
      }
    });
});

app.controller("userCltr", function ($scope, $http, ) {
  $scope.role = 'users';
  $http.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      if (response && response.data) {
        $scope.users = response.data;
        $scope.loded = true;
      }
    });
});

app.controller("newUserCltr", function ($scope, $http, $routeParams) {
  $scope.role = 'NewUser';
  var id = $routeParams.id;
  $http.get("https://jsonplaceholder.typicode.com/users" + (id ? "/" + id : ""))
    .then(function (response) {
      if (response && response.data) {
        $scope.user = response.data;
      }
      $scope.loaded = true;
    });
});