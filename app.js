// conditionals

if (1 === 1){
  console.log("it's true");
}

let rating = 2;

if(rating === 3) {
  console.log('You are super start');
} else if (rating === 2) {
  console.log('Needs improvement');
} else {
  console.log('you suck');
}
  
let num = 37;

if(num % 2 !== 0) {
  console.log('Odd number');
}


let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}

let password = 'hello kitty';

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('Valid Password');
  } else {
    console.log('Password is long enough, but cannot contain spaces');
  }
} else {
  console.log('Password must be longer');
}

let mistery = 5;
// let mistery = NaN;

if (mistery) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

let loggedInUser = null;

if(loggedInUser) {
  console.log('You are logged in');
} else {
  console.log('Please log in');
}

let psswrd = 'chicken Gal';
if(psswrd.length >= 8 && psswrd.indexOf(' ') === -1) {
  console.log('Valid Password');
} else {
  console.log('Invalid Password');
}

let numero = 3;

if(numero >= 1 && numero <= 10) {
  console.log('Number is between 1 and 10');
} else {
  console.log('Please guess a number between 1 and 10');
}


