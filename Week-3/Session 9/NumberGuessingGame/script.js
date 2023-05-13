function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numGuesses = 0;

  while (numGuesses < totalGuesses) {
    let guess = prompt(getPromptText());

    if (guess === null) {
      // User pressed Cancel
      return 0;
    }

    if (guess === "" || isNaN(guess)) {
      alert("Please enter a number.");
      continue;
    }

    numGuesses++;

    if (guess < numToGuess) {
      alert(guess + " is too small. Guess a larger number.");
    } else if (guess > numToGuess) {
      alert(guess + " is too large. Guess a smaller number.");
    } else {
      // User guessed the correct number
      return numGuesses;
    }
  }

  // User exceeded the total number of guesses
  return 0;

  function getPromptText() {
    if (numGuesses === 0) {
      return "Enter a number between 1 and 100.";
    } else if (guess < numToGuess) {
      return guess + " is too small. Guess a larger number.";
    } else {
      return guess + " is too large. Guess a smaller number.";
    }
  }
}

playGuessingGame();
