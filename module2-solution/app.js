(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyer = this;

  buyer.toBuyList = ShoppingListCheckOffService.getItemsToBuy();

  buyer.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var shower = this;

  shower.alreadyBoughtList = ShoppingListCheckOffService.getItemsAlreadyBought();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
    {
      name: 'cookies',
      quantity: '10'
    },
    {
      name: 'magical unicorns',
      quantity: '6'
    },
    {
      name: 'strange things',
      quantity: '42'
    },
    {
      name: 'dragons',
      quantity: '3'
    },
    {
      name: 'Luftballons',
      quantity: '99'
    }
  ];
  var alreadyBoughtList = [];

  service.buyItem = function(itemIndex) {
    var boughtItem = toBuyList[itemIndex];
    toBuyList.splice(itemIndex, 1);
    alreadyBoughtList.push(boughtItem);
  }

  service.getItemsToBuy = function() {
    return toBuyList;
  }

  service.getItemsAlreadyBought = function() {
    return alreadyBoughtList;
  }
}

})();
