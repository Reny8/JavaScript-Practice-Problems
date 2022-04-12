//DAYS OF THE WEEK
let dayOfWeek = 'Monday'
console.log(dayOfWeek)
dayOfWeek = 'Friday'
// String interpolation
console.log(`I can't wait for ${dayOfWeek}!`)

// USER INPUT 
let animalInput = prompt('What is your favorite animal? ')
let colorInput = prompt('What is your favorite color? ')
console.log(`I've never seen a ${colorInput} ${animalInput}!`)

//CONDITIONALS
// Favorite Breakfast: French Toast 
// Favorite Lunch: Birra Tacos
// Favorite Dinner: Geneitos
let timeOfDay = 1800
let favoriteFood = null

if (timeOfDay < 1200) {
    favoriteFood = "French Toast";
    console.log(favoriteFood)
}
if (timeOfDay > 1200 & timeOfDay < 1700) {
    favoriteFood = "Birra Tacos";
    console.log(favoriteFood)
}
if (timeOfDay > 1700) {
    favoriteFood = "Geneitos";
    console.log(favoriteFood)
}
