
var foodApp = angular.module("foodApp");
foodApp.controller("foodCtrl", function () {
  var self = this;
  self.items = [
    {"id": 1, "name": "Food1", "category": "C1", "price": 4},
    {"id": 2, "name": "Food2", "category": "C2", "price": 5},
    {"id": 3, "name": "Food3", "category": "C2", "price": 7},
    {"id": 4, "name": "Food4", "category": "C3", "price": 9},
    {"id": 5, "name": "Food5", "category": "C4", "price": 11},
    
  ];
});