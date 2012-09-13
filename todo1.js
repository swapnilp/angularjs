angular.module("directive",[]).directive("contenteditable", function() {
    alert("asdasd");
    return {
	require: "ngModel",
	link: function(scope,elm, attrs, ctrl) {
	    elm.bind("blur", function() {
		scope.$apply(function() {
		    ctrl.$setViewValue(elm.html());
		});
	    });
	    
	    //ctrl.render = function(value) {
	//	elm.html(value);
	  //  };

	    //ctrl.setViewValue(elm.html());
	}
    };
});

function ctrlTodo($scope) {
}