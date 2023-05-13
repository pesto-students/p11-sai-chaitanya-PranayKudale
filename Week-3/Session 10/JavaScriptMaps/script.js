function calcWordFrequencies() {
  // Read a list of words from the user using the prompt function
  const wordList = prompt("Enter a list of words separated by spaces:").split(
    " "
  );

  // Create a map to store the frequency of each unique word
  const frequencyMap = new Map();

  // Iterate over the wordList, update the frequencyMap for each word
  for (const word of wordList) {
    // Increment the frequency count for the current word
    const currentCount = frequencyMap.get(word) || 0;
    frequencyMap.set(word, currentCount + 1);
  }

  // Output the frequency of each unique word to the console
  for (const [word, frequency] of frequencyMap) {
    console.log(`${word} ${frequency}`);
  }
}

// Call calcWordFrequencies() to prompt the user for a list of words and output their frequencies to the console
calcWordFrequencies();
