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
    $scope.sec1 =
    '<section class="container-fluid" id="section1">' +
        '<h1 class="text-center v-center">Sectionalize.</h1>' +
        '<div class="container">' +
          '<div class="row">' +
              '<div class="col-sm-4">' +
                '<div class="row">' +
                  '<div class="col-sm-10 col-sm-offset-2 text-center"><h3>Robust</h3><p>There is other content and snippets of details or features that can be placed here..</p><i class="fa fa-cog fa-5x"></i></div>' +
                '</div>' +
              '</div>' +
              '<div class="col-sm-4 text-center">' +
                '<div class="row">' +
                  '<div class="col-sm-10 col-sm-offset-1 text-center"><h3>Simple</h3><p>You may also want to create content that compells users to scroll down more..</p><i class="fa fa-user fa-5x"></i></div>' + 
                  '</div>' +
                  '</div>' + 
                  '<div class="col-sm-4 text-center">' +
                     '<div class="row">' +
                     '<div class="col-sm-10 text-center"><h3>Clean</h3><p>In the first 30 seconds of a users visit to your site they decide if theyre going to stay..</p><i class="fa fa-mobile fa-5x"></i></div>' +
                     '</div>' +
                    '</div>' +
                  '</div><!--/row-->' +
                 '<div class="row"><br></div>' +
           '</div><!--/container-->' +
       '</section>';
  }]);

