/*
  Modify function below to take an array with the following shape:
    [
      { name: "Widget", price: 3.2943, qty: 3 },
      { name: "Thingy", price 17.9932, discount: 0.1, qty: 2 },
      { name: "Floop" },
      { name: "Blubber", price: 12.9979, discount: 0.15 },
    ]
  And return the total cost (as a number) for all the items using the following rules:
    1) If the item has a "qty" property, multiply the price by that field (if qty is omitted, assume 1)
    2) If the item has a "discount", multiply the price by 1-discount.  For example,
       if the price is 10, and the discount is 0.15 (15%), you would multiply 10*(1-0.15) = 8.5
*/
function transform(array) {
}

module.exports = transform
