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
	{ id: 203, name: "Coffee Maker", category: "Kitchen Appliances", price: 79.99 },
	{ id: 204, name: "Running Shoes", category: "Footwear", price: 59.99 },
	{ id: 205, name: "Bookshelf", category: "Furniture", price: 149.99 },
];

console.log("--------------------------------------Q1-----------------------------------------");
/**************************************************************
 ✅ Question 1:
 Create a function `getProductName` that:
 - Accepts a `product` of type `Product`
 - Returns the name of the product
 **************************************************************/
function getProductName(product: Product): string {
	return product.name;
}
console.log(getProductName(products[0])); // "Laptop"

console.log("--------------------------------------Q2-----------------------------------------");
/**************************************************************
 ✅ Question 2:
 Create a function `isProductCategoryMatching` that:
 - Accepts a `product` of type `Product` and a `category` (string)
 - Returns `true` if the product’s category matches the given category
 **************************************************************/
function isProductCategoryMatching(product: Product, category: string): boolean {
	if (product.category === category) {
		return true;
	}
	return false;
}
console.log(isProductCategoryMatching(products[1], "Clothing")); // true

console.log("--------------------------------------Q3-----------------------------------------");
/**************************************************************
 ✅ Question 3:
 Create a function `addProduct` that:
 - Accepts an array of `Product` and a new `Product`
 - Adds the product to the array and returns the updated array
 **************************************************************/
function addProduct(products: Product[], newProduct: Product): Product[] {
	products.push(newProduct);
	return products;
}

const newProduct: Product = { id: 206, name: "Headphones", category: "Electronics", price: 149.99 };

console.log(addProduct(products, newProduct));

console.log("--------------------------------------Q4-----------------------------------------");
/**************************************************************
 ✅ Question 4:
 Create a function `countElectronicsProducts` that:
 - Accepts an array of products
 - Returns the number of products in the "Electronics" category
 **************************************************************/
function countElectronicsProducts(product: Product[]): number {
	let countElectronicsProduct = product.filter((product) => {
		if (product.category === "Electronics") {
			return true;
		} else {
			return false;
		}
	});
	return countElectronicsProduct.length;
}
console.log(countElectronicsProducts(products));

console.log("--------------------------------------Q5-----------------------------------------");
/**************************************************************
 ✅ Question 5: 🌶️
 Create a function `listProductNamesByCategory` that:
 - Accepts an array of products and a category
 - Returns an array of product names that match the category
 **************************************************************/
function listProductNamesByCategory(products: Product[], category: string): string[] {
	let namesByCategories = products.filter((product) => product.category === category).map((product) => product.name);
	return namesByCategories;
}

console.log(listProductNamesByCategory(products, "Electronics"));

console.log("--------------------------------------Q6-----------------------------------------");
/**************************************************************
 ✅ Question 6: 🌶️🌶️
 Create a function `getCheapestProduct` that:
 - Accepts an array of products
 - Returns the product object with the lowest price
 **************************************************************/
function getCheapestProduct(products: Product[]): {} {
	let sort = products.sort((a, b) => {
		return a.price - b.price;
	});
	return sort[0];
}

console.log(getCheapestProduct(products));

console.log("--------------------------------------Q7-----------------------------------------");
/**************************************************************
 ✅ Question 7:
 Create a function `removeProductById` that:
 - Accepts an array of products and a product ID
 - Removes the product with that ID
 - Returns the updated array
 **************************************************************/
function removeProductById(products: Product[], id: number): Product[] {
	let removeByID = products.filter((product) => product.id !== id);
	return removeByID;
}

console.log(removeProductById(products, 202));

console.log("--------------------------------------Q8-----------------------------------------");
/**************************************************************
 ✅ Question 8: 🌶️🌶️🌶️
 Create a function `getProductsByPriceRange` that:
 - Accepts an array of products, a min price, and a max price
 - Returns an array of products within that price range (inclusive)
 **************************************************************/
function getProductsByPriceRange(products: Product[], min: number, max: number): Product[] {
	let getByRange = products.filter((product) => product.price >= min && product.price <= max);
	return getByRange;
}

console.log(getProductsByPriceRange(products, 19.99, 59.99));
