function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord= word.split('').reverse().join('');
  if (word=== reverseWord) {
    return true
  }
  else {
    return false
  }
}
console.log(isPalindrome('mom'));

/* 
  Add your pseudocode here
  reverse the word 
  check if it is still the same
  return true if the same 
  return false if it is different
*/

/*
  Add written explanation of your solution here
  when reversing you turn the word into array first then reverse and join it
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
