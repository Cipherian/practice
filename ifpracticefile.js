let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = false;

let runnerAge = Math.floor(Math.random() * 60);

if (runnerAge >= 18 && registerEarly == true) {
  raceNumber + 1000;
}

if  (runnerAge  >= 18 && registerEarly == true) {
  console.log(`The race starts at 9:30am and your number is ${raceNumber}`)
} else if (runnerAge >=18 && registEarly == false) {
  console.log (`You will race at 11:00am and your race number is ${raceNumber}`)
}
registerEarly = true;

if (runnerAge < 18) {
  console.log(`You will race at 12:30pm and your number is ${raceNumber}`)
}