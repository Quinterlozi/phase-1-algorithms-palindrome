function isPalindrome(word) {
  // Write your algorithm here
  //This challenge checks to see names that sound the same when spelled from front to back and back to front
}

/* 
  Add your pseudocode here
//Write a function know as isPalindrome
//Convert the string to lowerCase
//Loop through the dtring to check if the first and last letter are a match
//If the loop ends and the letters don't match return false
//Else if the loop ends and the letters match return true

/*
  Add written explanation of your solution here
*/function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();
  
  // Loop through the string and check if the first and last characters match
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  
  // If we make it through the loop without returning false, the string is a palindrome
  return true;
}

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
