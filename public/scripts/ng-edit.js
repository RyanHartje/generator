// Ryan Hartje does Angular


angular.module("root", ['ngSanitize'])
  .controller("index", ["$scope", function($scope){
    $scope.navbar="<div class='navbar-header'><button type='button' data-toggle='collapse' data-target='.navbar-collapse' class='navbar-toggle'><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></button><a href='#' class='navbar-brand'>Generator </a></div><div class='collapse navbar-collapse'><ul class='nav navbar-nav'><li class='active'><a href='#'>Home</a></li><li><a href='#about'>About</a></li><li><a href='#contact'>Contact</a></li><li class='ui'><a id='save' href='#' class='ui'>Save</a></li><li class='ui'><a href='#' class='ui add_jumbotron'>Jumbo</a></li><li class='ui'><a href='#' class='ui add_bgblock'>BGBlock</a></li><li><a class='ui add_contentblock'>Content</a></li><li><a class='ui add_footer'>Footer</a></li>      </ul><ul class='nav nav-bar navbar-right'><li class='ui'><a class='ui'><i class='glyphicon.glyphicon-pencil.editor'></i></a></li></ul></div></div></div>";
  }]);
