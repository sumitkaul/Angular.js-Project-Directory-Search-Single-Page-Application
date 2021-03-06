var myApp= angular.module('myApp',[
 'ngRoute',
 'artistControllers'

]);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/list',{
		templateUrl :'partials/list.html',
		controller : 'ListController'
	}).
	//route of the second partial goes here
	when('/details/:itemId',{
		templateUrl :'partials/details.html',
		controller : 'DetailsController'
	}).
	otherwise({
		redirectTo : '/list'
	});
}]);