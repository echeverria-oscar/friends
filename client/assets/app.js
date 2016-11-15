var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
// Routes to load your new and edit pages with new and edit controllers attached to them!
  .when('/create',{
    templateUrl:'partials/create_friend.html',
    controller: 'newController'
  })
  //when someone enters a url into my local host..
  //load the following partial: amd the _id will be passed into the $route params object
  //as long as the $routeparams is injected
  .when('/edit/:_id',{
    templateUrl:'partials/edit_friend.html',
    controller:'editController'
  })
  .when('/show/:_id', {
    templateUrl:'partials/show.html',
    controller:'editController'
  })
  // when someone uses any other route than above, load the following partial
  .otherwise('/new');
});
