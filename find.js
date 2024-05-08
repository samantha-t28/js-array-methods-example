const inventory = [
    {brand: "lamy", quantity: 10},
    {brand: "kaweco", quantity: 18},
    {brand: "platinum", quantity: 9},
    {brand: "pilot", quantity: 20},
    {brand: "sailor", quantity: 15},
];

// Find the object where the brand is "kaweco"

const findPenByBrand = inventory.find((fountainPen) => fountainPen.brand === "kaweco")

console.log(findPenByBrand);


