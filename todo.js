angular.module("myroute", []).
    config(function($routeProvider){
	    $routeProvider.when('/about', {templateUrl:'partial/basic.html', controller:aboutCtrl});
	    $routeProvider.when('/experiment', {templateUrl:'partial/basic.html', controller:experimentCtrl});
	    $routeProvider.when('/home', {templateUrl:'partial/basic.html', controller:homeCtrl});
	    $routeProvider.otherwise({redirectTo: "/home"});

	});


function todoCtrl($scope) {
    $scope.todos = [
		    {text:'first', done:false},
		    {text:'second', done:true}];
    $scope.items = ["first", "second", "thrid", "fourth", "fifth"];
    $scope.addTodo = function() {
	$scope.todos.push({text:$scope.todoText, done:false});
	$scope.todoText = '';
    };
    
    $scope.remaining = function() {
	var count = 0;
	angular.forEach($scope.todos, function(todo) {
		count += todo.done ? 0 : 1;
	    });
	return count
    };
    
    $scope.clearCompleted = function() {
	$scope.todos = _.filter($scope.todos, function(todo) {
		return !todo.done;
	    })
    };
}

function myCtrl($scope) {
    $scope.mystr = '';
    $scope.print_mystr = function() {
	return $scope.mystr
    };
    $scope.addstr = function() {
	$scope.mystr =  $scope.mystr + $scope.text1
    };
}


function mainCtrl($scope, $location) {
    $scope.setRoute = function(route) {
	$location.path(route);
    };
}

function aboutCtrl($scope) {
    $scope.title = "About";
    $scope.body = "M in About";
	
}

function experimentCtrl($scope) {
    $scope.title = "Experiment";
    $scope.body = "M in experiment";
	
}

function homeCtrl($scope) {
    $scope.title = "Home";
    $scope.body = "M in Home";
}