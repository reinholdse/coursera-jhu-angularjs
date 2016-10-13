(function () {
'use strict';

angular.module('LunchCheck', [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";

  $scope.sayMessage = function() {
    var dish_list = $scope.list.split(",");
    var dish_count = countDishes(dish_list);
    $scope.message = generateMessage(dish_count);
  }

  function countDishes(dish_list) {
    var dish_count = 0;
    for (var i = 0; i < dish_list.length; i++)
      if (dish_list[i].replace(/\s/g, "").length)
        dish_count++;
    return dish_count;
  }

  function generateMessage(dish_count) {
    var message = "";
    if (!dish_count)
      message = "Please enter data first";
    else if (dish_count < 4)
      message = "Enjoy!";
    else
      message = "Too much!";
    return message;
  }

}

})();
