//this is the creation of the namespace so that we can protect our variables for nameing conflicts
var artistControllers = angular.module('artistControllers',[]);

artistControllers.controller('ListController', ['$scope','$http',function ($scope,$http){

	$http.get("js/data.json").success(function(data){
	$scope.artists =data;
	$scope.artists ='name';

	});		 
}]);

