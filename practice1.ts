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
function getProductName(product: Product): boolean {
  if (product.name === "Laptop") {
    return true;
  } else {
    return false;
  }
}
const newProducts = products.filter(getProductName);
const productName = newProducts.map((item) => item.name);
console.log(productName); // "Laptop"

/**************************************************************
✅ Question 2:
Create a function `isProductCategoryMatching` that:
- Accepts a `product` of type `Product` and a `category` (string)
- Returns `true` if the product’s category matches the given category
**************************************************************/
function isProductCategoryMatching(
  product: Product,
  category: string
): boolean {
  if (product.category === "Clothing") {
    return true;
  } else {
    return false;
  }
}
console.log(isProductCategoryMatching(products[1], "Clothing")); // true

/**************************************************************
✅ Question 3:
Create a function `addProduct` that:
- Accepts an array of `Product` and a new `Product`
// - Adds the product to the array and returns the updated array
// **************************************************************/
function addProduct(products: Product[], newProduct: Product): Product[] {
  return [...products, newProduct];
}
const newProduct: Product = {
  id: 206,
  name: "Headphones",
  category: "Electronics",
  price: 149.99,
};
const updatedProducts = addProduct(products, newProduct);
console.log(updatedProducts);

/**************************************************************
✅ Question 4:
Create a function `countElectronicsProducts` that:
- Accepts an array of products
- Returns the number of products in the "Electronics" category
**************************************************************/
function countElectronicsProducts(prodects1: Product): boolean {
  if (prodects1.category === "Electronics") {
    return true;
  } else {
    return false;
  }
}
const prodectsrFilter = products.filter(countElectronicsProducts);
prodectsrFilter.length;
console.log(prodectsrFilter.length);

/**************************************************************
✅ Question 5: 🌶️
Create a function `listProductNamesByCategory` that:
- Accepts an array of products and a category
- Returns an array of product names that match the category
**************************************************************/
function listProductNamesByCategory(
  products: Product[],
  category: string
): string[] {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const newProducts = filteredProducts.map((item) => item.name);
  return newProducts;
  // products.filter((product) => product.category === category).map((item) => item.name)
}

console.log(listProductNamesByCategory(products, "Electronics"));

/**************************************************************
✅ Question 6: 🌶️🌶️
Create a function `getCheapestProduct` that:
- Accepts an array of products
- Returns the product object with the lowest price
**************************************************************/
function getCheapestProduct(products: Product[]): string[] {
  return products
    .filter((item) => item.price === 19.99)
    .map((item) => item.name);
}
console.log(getCheapestProduct(products));

/**************************************************************
✅ Question 7:
Create a function `removeProductById` that:
- Accepts an array of products and a product ID
- Removes the product with that ID
- Returns the updated array
**************************************************************/
function removeProductById(products: Product[], productID: number): Product[] {
  return products.filter((item) => item.id !== productID);
}
console.log(removeProductById(products, 202));

/**************************************************************
✅ Question 8: 🌶️🌶️🌶️
Create a function `getProductsByPriceRange` that:
- Accepts an array of products, a min price, and a max price
- Returns an array of products within that price range (inclusive)
**************************************************************/
function getProductsByPriceRange(
  products: Product[],
  minPrice: number,
  maxPrice: number
): string[] {
  const productsPrice = products
    .filter((item) => item.price >= minPrice && item.price <= maxPrice)
    .map((item) => item.name);
  return productsPrice;
}
console.log(getProductsByPriceRange(products, 19.99, 59.99));
