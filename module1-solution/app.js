(function () {
'use strict';

angular.module('LunchCheck', [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.color = "none";

  $scope.sayMessage = function() {
    var dish_list = $scope.list.split(",");
    var dish_count = countDishes(dish_list);
    var output = generateOutput(dish_count);
    $scope.message = output[0];
    $scope.color = output[1];
  }

  function countDishes(dish_list) {
    var dish_count = 0;
    for (var i = 0; i < dish_list.length; i++)
      if (dish_list[i].replace(/\s/g, "").length)
        dish_count++;
    return dish_count;
  }

  function generateOutput(dish_count) {
    var message = "",
        color = "";
    if (!dish_count) {
      message = "Please enter data first";
      color = "red";
    }
    else if (dish_count < 4) {
      message = "Enjoy!";
      color = "green";
    }
    else {
      message = "Too much!";
      color = "green";
    }
    return [message, color];
  }

  function color() {

  }

}

})();
