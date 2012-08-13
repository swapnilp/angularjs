function todoCtrl($scope) {
    $scope.todos = [
		    {text:'first', done:false},
		    {text:'second', done:true}];
    
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

