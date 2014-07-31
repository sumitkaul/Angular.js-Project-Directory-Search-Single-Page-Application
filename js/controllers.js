//this is the creation of the namespace so that we can protect our variables for nameing conflicts
var artistControllers = angular.module('artistControllers',['ngAnimate']);

artistControllers.controller('ListController', ['$scope','$http',function ($scope,$http){

	$http.get("js/data.json").success(function(data){
	$scope.artists =data;
	$scope.artistOrder ='name';

	});		 
}]);


artistControllers.controller('DetailsController', ['$scope','$http','$routeParams',function ($scope,$http,$routeParams){

	$http.get("js/data.json").success(function(data){
	$scope.artists =data;
	$scope.whichItem = $routeParams.itemId;

		//Prev item
		//If the item is not the first item in the array scope then get the previous item else get the last item which is at the end of the array length
		if($routeParams.itemId > 0){
			//we are adding the number here because the route param will retuen the string for itemId for which we need to subtract 1 so we need to convert that to int first and then subtract 1.
			$scope.prevItem= Number($routeParams.itemId) -1 ; 
		} else{
			$scope.prevItem= $scope.artists.length -1;
		} 

		//Next Item
		if($routeParams.itemId < 0){
			$scope.nextItem= Number($routeParams.itemId) +1 ; 
		} else{
			$scope.nextItem= 0;
		} 

	});		 
}]);


