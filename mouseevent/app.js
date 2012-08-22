var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  // Get the product data from somewhere - in this case hard coded
  $scope.products = getProductData();
});

app.controller('ProductCtrl', function($scope) {
  // Set the currentColor for this controller's scope (i.e. for this product)
  $scope.currentColor = $scope.product.colors[0];
  // Set the current color for this product, if you didn't want to have this method
  // defined for each product you could move it into the controller above but then
  // you would also need to pass in the current product as well as the color and
  // store the current color on that product.
  $scope.setCurrentColor = function(color) { $scope.currentColor = color; };

});

/////////////////////////////////////////////////////////////////////////////////////
// All this below here is just to generate the data that would come from the server
function getProductData() {
  var sizes1 = [
    {name: 'small'},
    {name: 'medium'},
    {name: 'large'}
  ];
  var sizes2 = [
    {name: 'x-small'},
    {name: 'x-medium!'},
    {name: 'x-large'}
  ];
  var sizes3 = [
    {name: 'large'},
    {name: 'huge'},
    {name: 'enormous'}
  ];
  
  var colors1 = [
    {name: 'red', sizes: sizes1},
    {name: 'green', sizes: sizes2},
    {name: 'blue', sizes: sizes3}
  ];
  
  var colors2 = [
    {name: 'orange', sizes: sizes3},
    {name: 'brown', sizes: sizes2},
    {name: 'black', sizes: sizes1}
  ];

  return [
    { style: 'Style 1', label: 'Label 1', colors: colors1},
    { style: 'Style 2', label: 'Label 2', colors: colors2}
  ];
  
}
