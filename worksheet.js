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
else if (randomNumber > 3 & randomNumber < 5) {
    console.log('Stones')
}
else if (randomNumber > 6 & randomNumber < 8) {
    console.log('Floyd')
}
else if (randomNumber == 9 || randomNumber == 10) {
    console.log('Hendrix')
}

//LOOPS 1

for (let number = 0; number < 7; number++) {
    console.log('JavaScript is cool!')
}

// LOOPS 2

for (let num = 0; num <= 10; num++) {
    console.log(num)
}

// LOOPS 3 

for (let greeting = 0; greeting < 5; greeting++) {
    console.log('hello')
    console.log('goodbye')
}

// FAVORITE MOVIE(VOID FUNCTIONS)

function printMovieName() {
    let favoriteMovie = 'Interstellar'
    console.log(favoriteMovie)
}
printMovieName()

//FAVORITE BAND (RETURN FUNCTIONS)

function favoriteBand() {
    let userInput = prompt("Enter your favorite band: ")
    return userInput
}
band = favoriteBand()
console.log(band)

//CONCERT PARAMETERS 

function concertDisplay(musicalArt) {
    let myStreet = prompt("Enter the street you live on: ")
    console.log(`It would be great if ${musicalArt} played a show on ${myStreet}!`)
}
concertDisplay('My Chemical Romance')

//ARRAYS 

let desktopItems = ['water bottle','cellphone','laptop','tablet']
console.log(desktopItems[1])
desktopItems.push('Infinity Gauntlet')
for (let item in desktopItems) {
    console.log(desktopItems[item])
}

//MAGIC NUMBER 

let magicNumber = Math.floor(Math.random() * 100)
let guess = 0
let correctAnswer = false


while (correctAnswer == false) {
    number = prompt("Guess the magic number: ");
    if ( magicNumber - 10 == number || magicNumber + 10 == number) {
        console.log("Getting Warmer");
        guess++
    } 
    else if ( number > magicNumber ) {
        console.log("Too high");
        guess++
    }
    else if ( number < magicNumber ) {
        console.log("Too Low");
        guess++
    }
    else if ( number == magicNumber ) {
        console.log(`You guessed ${number} which is correct!`);
        console.log(`Times guessed: ${guess}`);
        correctAnswer = true;
    }
}

