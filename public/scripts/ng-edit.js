// Please report any bugs to
// https://github.com/RyanHartje
// ng-edit 
//
//   This controller will be responsible for manipulating the DOM
//   it should be an array of widgets held in JSON that allow the user to 
//   add/edit and change settings for widgets, then save the page.
//
//   Goals
//     Site CRUD
//     Widget CRUD
//     Can edit colors/fonts 
//     Create Widgets, and allow users to create their own and share
//
angular.module("root", ['ngSanitize'])
  .controller("index", ["$scope", function($scope){
    $scope.ui=
    "<div class='ui row text-center'>" +
      "<i class='fa fa-arrow-up fa-3x pull-left fa-border add_jumbotron'></i>" +
      "<i class='fa fa-dedent fa-3x fa-border pull-left add_contentblock'></i>" +
      "<i class='fa fa-file-image-o fa-3x fa-border pull-left add_bgblock'></i>" +
      "<i class='fa fa-arrow-down fa-3x pull-left fa-border add_footer'></i>" +
    "</ul></div>";
  }]);
