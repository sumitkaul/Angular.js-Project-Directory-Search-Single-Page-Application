//this is the creation of the namespace so that we can protect our variables for nameing conflicts
var myNameSpace = angular.module('myApp',[]);

myNameSpace.controller('MyController', function MyController($scope){	
	$scope.author = {
		'name':'Sumit Kaul',
		'title' : 'Senior Software Engineer',
		'company': 'Creative'
	}
});

