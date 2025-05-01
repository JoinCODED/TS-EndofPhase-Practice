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

/*************************************
 ✅ Question 1:
 Create a function `getMenuItemName` that:
 - Accepts a `MenuItem`
 - Returns the name of the item
*************************************/
function getMenuItemName(inputitem: MenuItem): string {
  return inputitem.name;
}
console.log(getMenuItemName(menu[0])); //i'm geting pasta
// console.log(getMenuItemName(menu[0]));

/*************************************
 ✅ Question 2:
 Create a function `isMenuItemInCategory` that:
 - Accepts a `MenuItem` and a `category` string
 - Returns true if the item belongs to that category
*************************************/
function isMenuItemInCategory(
  inputitem: MenuItem,
  inputCategory: string
): boolean {
  return inputitem.category === inputCategory;
}
console.log(isMenuItemInCategory(menu[1], "Salad")); //true!

// console.log(isMenuItemInCategory(menu[1], "Salad"));

/*************************************
 ✅ Question 3:
 Create a function `addMenuItem` that:
 - Accepts a `MenuItem[]` array and a new `MenuItem`
 - Adds the new item to the array
 - Returns the updated array
*************************************/
function addMenuItem(inputMenue: MenuItem[], inputnew: MenuItem): MenuItem[] {
  inputMenue.push(inputnew);
  return inputMenue;
}
// const newMenuItem: MenuItem = {
//   id: 306,
//   name: "Pizza",
//   category: "Main Course",
//   price: 14.99,
//   ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
// };

const newMenuItem: MenuItem = {
  //adding the new item object
  id: 306,
  name: "Pizza",
  category: "Main Course",
  price: 14.99,
  ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
};
// console.log(addMenuItem(menu, newMenuItem));

console.log(addMenuItem(menu, newMenuItem));
/*************************************
 ✅ Question 4:
 Create a function `countMainCourseItems` that:
 - Accepts a `MenuItem[]` array
 - Returns how many items are in the "Main Course" category
*************************************/
function countMainCourseItems(inputMenue: MenuItem[]): number {
  return inputMenue.length;
}
// console.log(countMainCourseItems(menu));
console.log(countMainCourseItems(menu));
/*************************************
 ✅ Question 5:
 Create a function `removeMenuItemById` that:
 - Accepts a `MenuItem[]` and a `menuItemId` number
 - Returns a new array without the item that matches the ID
*************************************/
function removeMenuItemById(
  inputMenue: MenuItem[],
  InputId: number
): MenuItem[] {
  return inputMenue.filter((inputitem) => {
    return inputitem.id !== InputId;
  });
}
removeMenuItemById(menu, 306);
console.log(`menue with removed item: `, removeMenuItemById(menu, 306)); //testing
/*************************************
 ✅ Question 6: 🌶️
 Create a function `listMenuItemNamesByCategory` that:
 - Accepts a `MenuItem[]` and a `category` string
 - Returns an array of item names that belong to that category
*************************************/

function listMenuItemNamesByCategory(
  inputMenue: MenuItem[],
  inputCategory: string
): string[] {
  return inputMenue
    .filter((inputitem) => {
      return inputitem.category === inputCategory;
    })
    .map((inputitem) => {
      return inputitem.name;
    });
}

console.log(
  `show me the goods :) | `,
  listMenuItemNamesByCategory(menu, "Main Course")
);
// console.log(listMenuItemNamesByCategory(menu, "Main Course"));

/*************************************
 ✅ Question 7: 🌶️🌶️
 Create a function `getCheapestMenuItem` that:
 - Accepts a `MenuItem[]` array
 - Returns the menu item with the lowest price
*************************************/

function getCheapestMenuItem(inputMenue: MenuItem[]): MenuItem {
  return [...inputMenue].sort((a, b) => a.price - b.price)[0]; //spread operator to protect our aray, sort price with descending order then return first element
}
// console.log(getCheapestMenuItem(menu));
console.log(`let's test sorting action: `, getCheapestMenuItem(menu)); //testing
/*************************************
 ✅ Question 8: 🌶️🌶️🌶️
 Create a function `getMenuItemsByIngredient` that:
 - Accepts a `MenuItem[]` and an `ingredient` string
 - Returns items that include that ingredient
*************************************/
function getMenuItemsByIngredient(
  inputMenue: MenuItem[],
  inputIngredient: string
): MenuItem[] {
  return inputMenue.filter((item) => {
    return item.ingredients.includes(inputIngredient);
  });
}
// console.log(getMenuItemsByIngredient(menu, "Parmesan"));
// console.log(removeMenuItemById(menu, 302));
console.log("`let's check the items:");
console.log(getMenuItemsByIngredient(menu, "Lettuce"));
