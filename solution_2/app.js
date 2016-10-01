(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;

	toBuy.items = ShoppingListCheckOffService.getToBuyItems();

	toBuy.buyItem = function($index){		
		ShoppingListCheckOffService.buyItem($index);
	};

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

	var alreadyBought = this;

	alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}

function ShoppingListCheckOffService(){

	 var service = this;

	 var toBuyitems = [{name:'Biscoito',quantity:3},{name:'Arroz',quantity:5},{name:'Feijao',quantity:3},{name:'Massa',quantity:15},{name:'Tomate',quantity:8}];
	 var alreadyBoughtItems = [];

  service.getToBuyItems = function () {
		return toBuyitems;
	};

	service.getAlreadyBoughtItems = function () {
		return alreadyBoughtItems;
	};

	service.buyItem = function (itemIdex) {
		alreadyBoughtItems.push(toBuyitems[itemIdex]);
		toBuyitems.splice(itemIdex, 1);
  };

}

})();
