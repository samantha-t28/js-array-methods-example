# JS Array Methods Example

Documentation:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


## What I've Learned

JavaScript `map`, `filter`, `find`, and `findIndex` methods are super handy for developers because we're constantly dealing with data. Getting to know more about these methods allow you to extract, find and restructure the arrays. These four methods all accept the same three parameters **element**,**index**,**array**.

## Map()
* It's like a loop function, iterates over elements in an array.
* Can reformat or transform elements in an array into a new structure
* Creates a new set of data from an existing array without modifying the original array.
* Useful for chaining with other methods, such as filter(), as both return new arrays.

The fruitLengths function iterates over each element in the fruits array and finds the length of each fruit.

### Example:
```javascript
const fruits = ['strawberry', 'grape', 'raspberry', 'watermelon', 'kiwi', 'lemon', 'blueberry', 'orange', 'grapefruit', 'banana'];

const fruitLengths = fruits.map(fruit => fruit.length)

console.log(lengthOfFruits);
// Output: [ 10, 5, 9, 10, 4, 5, 9, 6, 10, 6]
```
Base on the `fruits` array, it contains the names of the fruits. To restucture the `fruits` array, we can also return it into an array of object.

### Example:
```javascript
const selectFruit = (fruits) => {
    return fruits.map((fruit, index) => ({ fruit, index }));
}

//Output
//   { fruit: 'strawberry', index: 0 },
//   { fruit: 'grape', index: 1 },
//   { fruit: 'raspberry', index: 2 },
//   { fruit: 'watermelon', index: 3 },
//   { fruit: 'kiwi', index: 4 },
//   { fruit: 'lemon', index: 5 },
//   { fruit: 'blueberry', index: 6 },
//   { fruit: 'orange', index: 7 },
//   { fruit: 'grapefruit', index: 8 },
//   { fruit: 'banana', index: 9 }
```
* By placing curly braces `{}` around the key-value pairs inside the parentheses `()`, you are using what’s known as an `object literal`. The `fruit` and `index` are used as keys and values inside the new object.

## find()
* Starts with the first element in the array and checks if it matches a condition. If not, it continues to the next element until a match is found or the end of the array is reached.
* If a matching element is found, it returns that element. If not, it returns undefined.
* This method is useful when you want to find a specific element in an array.

`findPenByBrand` function is to find a specific element in the `inventory` array where the brand is "kaweco".

### Example:

```javascript
const inventory = [
    {brand: "lamy", quantity: 10},
    {brand: "kaweco", quantity: 18},
    {brand: "platinum", quantity: 9},
    {brand: "pilot", quantity: 20},
    {brand: "sailor", quantity: 15},
];

const findPenByBrand = inventory.find((fountainPen) => fountainPen.brand === "kaweco")

console.log(findPenByBrand);
//Output { brand: 'kaweco', quantity: 18 }
```

## findIndex()
* This method behaves similarly to `find()`, checking each element in an array until it finds one that matches a given condition.
* The difference is that it returns the index of the element instead of the element itself.
* This method is useful when you want to find the index of a specific element in an array.

### Example:

```javascript
const getIndexOfBrand = inventory.findIndex((item) => item.brand === 'sailor');

console.log(`Index:`,getIndexOfBrand(inventory));
//Output Index: 4
```

## filter()
* Extracts the specific element from the array that you're looking for

The `getLowStockBrands` function filters items from the inventory that have a quantity less than or equal to 18. It then chains with `map()` to return only the brand names of the matching items, using map() as an example of how chaining methods work.

### Example:
```javascript
const inventory = [
    {brand: "kaweco", quantity: 18},
    {brand: "lamy", quantity: 33},
    {brand: "platinum", quantity: 22},
    {brand: "pilot", quantity: 20},
    {brand: "sailor", quantity: 18},
    {brand: "twisbi", quantity: 26},
];

const getLowStockBrands = inventory.filter(item => item.quantity <= 18).map(item => item.brand);

console.log(`Low in stock:`,getLowStockBrands);
//Output Low in stock: [ 'kaweco', 'sailor' ]
```
`countLowStockBrands` function extracts the total items that have a quantity of 18 in the inventory. The `.length` property then counts how many items are in that array.

### Example:

```javascript
const countLowStockBrands = inventory.filter(item => item.quantity === 18).length;

console.log(`Low in stock:`,countLowStockBrands); // Output Low in stock: 2
```