/*countVowels.js (Green phase, simplest working version)
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";


  for (let i = 0; i < str.length; i++) {
    const ch = str[i].toLowerCase();
    if (vowels.includes(ch)) {
      count++;
    }
  }


  return count;
}


module.exports = countVowels;*/


// countVowels.js
function countVowels(str) {
  if (typeof str !== "string") return 0; // defensive check


  let count = 0;
  const vowels = "aeiou";


  for (let i = 0; i < str.length; i++) {
 const ch = str[i].toLowerCase();
    


    // check if it's an alphabetic character (a-z)
    if (ch >= 'a' && ch <= 'z') {
      if (vowels.includes(ch)) {
        count++;
      }
    }
  }


  return count;
}

module.exports = countVowels;