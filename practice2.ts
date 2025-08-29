/*************************************
 🍽️ TypeScript Practice: Menu Functions
**************************************/

// ✅ Step 1: Create a `MenuItem` interface
/**********
 * The MenuItem interface should contain the following keys:
 * 1. id of type number
 * 2. name of type string
 * 3. category of type string
 * 4. price of type number
 * 5. ingridents of type array of strings
 *
 * *************/
interface MenuItem {
	id: number;
	name: string;
	category: string;
	price: number;
	ingredients: string[];
}

// ✅ Step 2: Use this array to test your answers
const menu: MenuItem[] = [
	{
		id: 301,
		name: "Pasta",
		category: "Main Course",
		price: 12.99,
		ingredients: ["Penne", "Tomato Sauce", "Parmesan", "Basil"],
	},
	{
		id: 302,
		name: "Caesar Salad",
		category: "Salad",
		price: 8.99,
		ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
	},
	{
		id: 303,
		name: "Burger",
		category: "Main Course",
		price: 10.99,
		ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun"],
	},
	{
		id: 304,
		name: "French Fries",
		category: "Side Dish",
		price: 4.99,
		ingredients: ["Potatoes", "Salt", "Oil"],
	},
	{
		id: 305,
		name: "Cheesecake",
		category: "Dessert",
		price: 6.99,
		ingredients: ["Cream Cheese", "Graham Cracker Crust", "Strawberries"],
	},
];
console.log("--------------------------------------Q1-----------------------------------------");

/*************************************
 ✅ Question 1:
 Create a function `getMenuItemName` that:
 - Accepts a `MenuItem`
 - Returns the name of the item
 *************************************/
function getMenuItemName(item: MenuItem): string {
	return item.name;
}

console.log(getMenuItemName(menu[0]));
console.log("--------------------------------------Q2-----------------------------------------");

/*************************************
 ✅ Question 2:
 Create a function `isMenuItemInCategory` that:
 - Accepts a `MenuItem` and a `category` string
 - Returns true if the item belongs to that category
 *************************************/
function isMenuItemInCategory(item: MenuItem, category: string): boolean {
	return item.category === category;
}

console.log(isMenuItemInCategory(menu[1], "Salad"));
console.log("--------------------------------------Q3-----------------------------------------");

/*************************************
 ✅ Question 3:
 Create a function `addMenuItem` that:
 - Accepts a `MenuItem[]` array and a new `MenuItem`
 - Adds the new item to the array
 - Returns the updated array
 *************************************/
function addMenuItem(menu: MenuItem[], newItem: MenuItem): MenuItem[] {
	menu.push(newItem);
	return menu;
}

const newMenuItem: MenuItem = {
	id: 306,
	name: "Pizza",
	category: "Main Course",
	price: 14.99,
	ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
};
console.log(addMenuItem(menu, newMenuItem));
console.log("--------------------------------------Q4-----------------------------------------");

/*************************************
 ✅ Question 4:
 Create a function `countMainCourseItems` that:
 - Accepts a `MenuItem[]` array
 - Returns how many items are in the "Main Course" category
 *************************************/
function countMainCourseItems(menu: MenuItem[]): number {
	let courseMenu = menu.filter((item) => item.category === "Main Course").length;
	return courseMenu;
}

console.log(countMainCourseItems(menu));

console.log("--------------------------------------Q5-----------------------------------------");
/*************************************
 ✅ Question 5:
 Create a function `removeMenuItemById` that:
 - Accepts a `MenuItem[]` and a `menuItemId` number
 - Returns a new array without the item that matches the ID
 *************************************/
function removeMenuItemById(menu: MenuItem[], menuItemId: number): MenuItem[] {
	let removeByID = menu.filter((item) => item.id !== menuItemId);

	return removeByID;
}
console.log(removeMenuItemById(menu, 302));

console.log("--------------------------------------Q6-----------------------------------------");
/*************************************
 ✅ Question 6: 🌶️
 Create a function `listMenuItemNamesByCategory` that:
 - Accepts a `MenuItem[]` and a `category` string
 - Returns an array of item names that belong to that category
 *************************************/
function listMenuItemNamesByCategory(menu: MenuItem[], category: string): string[] {
	let listMenuItem = menu.filter((item) => item.category === category).map((item) => item.name);
	return listMenuItem;
}

console.log(listMenuItemNamesByCategory(menu, "Main Course"));
console.log("--------------------------------------Q7-----------------------------------------");
/*************************************
 ✅ Question 7: 🌶️🌶️
 Create a function `getCheapestMenuItem` that:
 - Accepts a `MenuItem[]` array
 - Returns the menu item with the lowest price
 *************************************/
function getCheapestMenuItem(menu: MenuItem[]): MenuItem {
	let chaepestItem = menu.reduce((cheapest, current) => (current.price < cheapest.price ? current : cheapest));

	return chaepestItem;
}

console.log(getCheapestMenuItem(menu));
console.log("--------------------------------------Q8-----------------------------------------");

/*************************************
 ✅ Question 8: 🌶️🌶️🌶️
 Create a function `getMenuItemsByIngredient` that:
 - Accepts a `MenuItem[]` and an `ingredient` string
 - Returns items that include that ingredient
*************************************/
function getMenuItemsByIngredient(menu: MenuItem[], ingredient: string): MenuItem[] {
	let getItemByIngredient = menu.filter((item) => item.ingredients.includes(ingredient));
	return getItemByIngredient;
}

console.log(getMenuItemsByIngredient(menu, "Parmesan"));
