// store is the app name
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    // product is a property of our controller
    this.product = gem;
  });

  var gems = [
    {
    name: 'Dodecahedron',
    price: 2.95,
    description: '...',
    canPurchase: false,
    soldOut: true
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "...",
    canPurchase: false,
  }
})();