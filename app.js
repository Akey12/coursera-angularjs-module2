(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;

      toBuy.Items = ShoppingListCheckOffService.ToBuyList();

      toBuy.BoughtItem = function(index) {
          ShoppingListCheckOffService.BoughtItem(index);
      }
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;

      bought.Items = ShoppingListCheckOffService.BoughtList();
  }
    

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [{ Name: "Cookies", Quantity: 10 },
    { Name: "Chips", Quantity: 5 },
    { Name: "Tomato", Quantity: 3 },
    { Name: "Apples", Quantity: 5 },
    { Name: "Oranges", Quantity: 4 }];

    var boughtItems = [];

    service.ToBuyList = function() {
        return toBuyItems;
    };

    service.BoughtList = function() {
        return boughtItems;
    };

    service.BoughtItem = function (index) {
        // retrieve single item
        var removed = toBuyItems.splice(index, 1)[0];
        boughtItems.push(removed);
    };
  }

})();
