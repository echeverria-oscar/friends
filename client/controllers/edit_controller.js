app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location' , function($scope, friendsFactory, $routeParams, $location) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial -
    so we didn't set a variable so we could reuse it -
    we just run the friendsFactory method directly.
  */
  //  friendsFactory.getFriend(function(returnedData){
  //    $scope.friend = returnedData;
  //    console.log($scope.friend);
  //  });
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
  $scope.test="Hello";


  friendsFactory.show($routeParams._id, function(friendFromServer){
    $scope.friend = friendFromServer
    // console.log($scope.friend)
  })
  $scope.updateFriend = function(){
    friendsFactory.update($scope.friend._id, $scope.editedFriend, function(friendFromServer){
      $location.url('/new')
    })
  }
}]);
