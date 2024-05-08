const inventory = [
    {brand: "lamy", quantity: 10},
    {brand: "kaweco", quantity: 18},
    {brand: "platinum", quantity: 9},
    {brand: "pilot", quantity: 20},
    {brand: "sailor", quantity: 15},
];


const getIndexOfBrand = inventory.findIndex((item) => item.brand === 'sailor');

console.log(`Index:`,getIndexOfBrand(inventory));
