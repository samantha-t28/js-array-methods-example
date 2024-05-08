const inventory = [
    {brand: "kaweco", quantity: 18},
    {brand: "lamy", quantity: 33},
    {brand: "platinum", quantity: 22},
    {brand: "pilot", quantity: 20},
    {brand: "sailor", quantity: 18},
    {brand: "twisbi", quantity: 26},
];

// Example 1: Extract items that have a quantity less than or equal to 18 from the inventory. Chain map() to return only the brand that matches with the quantity.
const getLowStockBrands = inventory.filter(item => item.quantity <= 18).map(item => item.brand);

console.log(`Low in stock:`,getLowStockBrands);

////Example 2: Counting occurrences to see how many items have a quantity of 18 in the inventory.
// const countLowStockBrands = inventory.filter(item => item.quantity === 18).length;

// console.log(`Low in stock:`,countLowStockBrands);
