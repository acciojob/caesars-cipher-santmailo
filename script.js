// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
 let decodedArr = []; // Array to hold the decoded characters
  
  // Loop through each character of the input string
  for (let i = 0; i < encodedStr.length; i++) {
    let char = encodedStr[i];
    
    // If the character is in the lookup object, decode it
    if (lookup[char]) {
      decodedArr.push(lookup[char]);
    } else {
      // If it's not in the lookup object, push it as is (non-alphabetic characters)
      decodedArr.push(char);
    }
  }

  // Join the array into a string and return it
  return decodedArr.join('');
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
