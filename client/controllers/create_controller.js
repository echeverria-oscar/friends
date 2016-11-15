app.controller('newController', ['$scope','friendsFactory','$routeParams', function($scope, friendsFactory, $routeParams) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
   var getAll = function(){
      friendsFactory.index(function(returnedData){
        $scope.friends = returnedData;
        console.log('index section:',$scope.friends);
      });
    };
   getAll();
   //$scope.newFriend is the varaible that we want to pass into the factory method.
   $scope.create=function(){
     console.log('$scope.newFriend:', $scope.newFriend);
     friendsFactory.create($scope.newFriend, getAll);
   }
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
  $scope.delete=function(id){
    console.log('$scope.friends Delete:', id);
    friendsFactory.delete(id, getAll);
  }
}]);
