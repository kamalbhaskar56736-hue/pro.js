function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let num;

  while (num !==randomnumber) {
    num = Number(prompt("Enter a value between 1 and 100"));

    if (num < randomNumber) {
      console.log(" This Value is low");
    } else if (num > randomNumber) {
      console.log(" This Value is high");
    } else {
      console.log("Guessed correct answer!");
      break; 
    }
  }
}