/**************************************************************
📦 TypeScript Practice: Working with Products

You’re working with a list of products in a store. Each product has:
- id (number)
- name (string)
- category (string)
- price (number)

Your goal is to write functions that interact with this data.
**************************************************************/
// ✅ Step 1: Create a `Product` interface
/**********
 * The Product interface should contain the following keys:
 * 1. id of type number
 * 2. name of type string
 * 3. category of type string
 * 4. price of type number
 *
 * *************/
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}
// ✅ Sample data to test your functions
const products: Product[] = [
  { id: 201, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 202, name: "T-shirt", category: "Clothing", price: 19.99 },
  {
    id: 203,
    name: "Coffee Maker",
    category: "Kitchen Appliances",
    price: 79.99,
  },
  { id: 204, name: "Running Shoes", category: "Footwear", price: 59.99 },
  { id: 205, name: "Bookshelf", category: "Furniture", price: 149.99 },
];

/**************************************************************
✅ Question 1:
Create a function `getProductName` that:
- Accepts a `product` of type `Product`
- Returns the name of the product
**************************************************************/
function getProductName(inputProduct: Product): string {
  return inputProduct.name;
}
console.log(getProductName(products[0])); //test
// console.log(getProductName(products[0])); // "Laptop"

/**************************************************************
✅ Question 2:
Create a function `isProductCategoryMatching` that:
- Accepts a `product` of type `Product` and a `category` (string)
- Returns `true` if the product’s category matches the given category
**************************************************************/
function isProductCategoryMatching(
  inputProduct: Product,
  inputCategory: string
): boolean {
  return inputProduct.category === inputCategory; //comparing object category to input category
}
// console.log(isProductCategoryMatching(products[1], "Clothing")); // true
console.log(isProductCategoryMatching(products[1], "Clothing"));
/**************************************************************
✅ Question 3:
Create a function `addProduct` that:
- Accepts an array of `Product` and a new `Product`
- Adds the product to the array and returns the updated array
**************************************************************/
function addProduct(inputProduct: Product[], inputNew: Product): Product[] {
  inputProduct.push(inputNew);
  return inputProduct;
}

// const newProduct: Product = { id: 206, name: "Headphones", category: "Electronics", price: 149.99 };
// console.log(addProduct(products, newProduct));

const newProduct: Product = {
  //declaring the new product
  id: 206,
  name: "Headphones",
  category: "Electronics",
  price: 149.99,
};
addProduct(products, newProduct);
console.log(products); //testing
/**************************************************************
✅ Question 4:
Create a function `countElectronicsProducts` that:
- Accepts an array of products
- Returns the number of products in the "Electronics" category
**************************************************************/
function countElectronicsProducts(inputProducts: Product[]): number {
  let filterValue: string = "Electronics";
  return inputProducts.filter(
    (inputProducts) => inputProducts.category === filterValue //using filterValue variable makes the function more dynamic
  ).length; //using chain iterative methods .filter + .length
}
// console.log(countElectronicsProducts(products));
console.log(countElectronicsProducts(products)); //testing

/**************************************************************
✅ Question 5: 🌶️
Create a function `listProductNamesByCategory` that:
- Accepts an array of products and a category
- Returns an array of product names that match the category
**************************************************************/
function listProductNamesByCategory(
  inputProducts: Product[],
  inputCategory: string
): string[] {
  return inputProducts
    .filter((product) => product.category === inputCategory)
    .map((product) => product.name);
}
// console.log(listProductNamesByCategory(products, "Electronics"));
console.log(listProductNamesByCategory(products, "Electronics"));
/**************************************************************
✅ Question 6: 🌶️🌶️
Create a function `getCheapestProduct` that:
- Accepts an array of products
- Returns the product object with the lowest price
**************************************************************/
function getCheapestProduct(inputProducts: Product[]): Product | undefined {
  //undefined was added to fix return error (product type cannot be assigned to undefined
  const minPrice = Math.min(
    ...inputProducts.map((inputProducts) => inputProducts.price)
  );
  return inputProducts.find(
    (inputProducts) => inputProducts.price === minPrice
  );
}
console.log(`Cheapest product: `, getCheapestProduct(products));
// console.log(getCheapestProduct(products))
/**************************************************************
✅ Question 7:
Create a function `removeProductById` that:
- Accepts an array of products and a product ID
- Removes the product with that ID
- Returns the updated array
**************************************************************/
function removeProductById(
  inputProducts: Product[],
  InputId: number
): Product[] {
  return inputProducts.filter((inputProducts) => {
    return inputProducts.id !== InputId;
  });
}
console.log(
  `show me everything but id-202: `,
  removeProductById(products, 202)
);
// console.log(removeProductById(products, 202));

/**************************************************************
✅ Question 8: 🌶️🌶️🌶️
Create a function `getProductsByPriceRange` that:
- Accepts an array of products, a min price, and a max price
- Returns an array of products within that price range (inclusive)
**************************************************************/
function getProductsByPriceRange(
  inputProduct: Product[],
  inputmin: number,
  inputmax: number
): Product[] {
  return inputProduct.filter((inputProducts) => {
    return inputProducts.price <= inputmax && inputProducts.price >= inputmin;
  }); //using && logical operator
}
// console.log(getProductsByPriceRange(products, 19.99, 59.99));
console.log(
  `show me products between 59 and 19: `,
  getProductsByPriceRange(products, 19.99, 59.99)
);
