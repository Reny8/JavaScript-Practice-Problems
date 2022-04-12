//DAY OF THE WEEK

let dayOfWeek = 'Monday'
console.log(dayOfWeek)
dayOfWeek = 'Friday'
console.log(`I can't wait for ${dayOfWeek}!`)

// USER INPUT

let animalInput = prompt('What is your favorite animal? ')
let colorInput = prompt('What is your favorite color? ')
console.log(`I've never seen a ${colorInput} ${animalInput}!`)


//MEALS

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

//RANDOM NUMBER
let randomNumber = Math.floor(Math.random() * 10)
if (randomNumber > 0 & randomNumber < 2) {
    console.log('Beatles')
}
if (randomNumber > 3 & randomNumber < 5) {
    console.log('Stones')
}
if (randomNumber > 6 & randomNumber < 8) {
    console.log('Floyd')
}
if (randomNumber == 9 || randomNumber == 10) {
    console.log('Hendrix')
}

