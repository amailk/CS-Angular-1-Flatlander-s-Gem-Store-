// store is the app name
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    // product is a property of our controller
    this.products = gems;
  });

  var gems = [
    {
    name: 'Dodecahedron',
    price: 2.95,
    description: '...',
    canPurchase: false,
    soldOut: true,
    images: [
      {
        full: 'dode-full.jpg',
        thumb: 'dode-thumb.jpg'
      },
      {
        full: 'dode2-full.jpg',
        thumb: 'dode2-thumb.jpg'
      }
      ]
    },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "...",
    canPurchase: false,
    soldOut:true,
    images: [
      {
        full: 'pent-full.jpg',
        thumb: 'pent-thumb.jpg'
      },
      {
        full: 'pent2-full.jpg',
        thumb: 'pent2-thumb.jpg'
      }
      ]
  }
];
})();
