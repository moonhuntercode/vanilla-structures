// Write your code here:
const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];  
const isVegan = dinner => dinner.source == "plant";
const isTheDinnerVegan = food => food.every(isVegan);
;

console.log(isTheDinnerVegan(dinner));

// Feel free to comment out the code below to test your function
/*

// Should print false
*/
