var s = "Hello World"
var lengthOfLastWord = function(s) {
    // The trim() method removes whitespace from both sides of a string.
   const words = s.trim().split(" ");
   return words.length > 0 ? words[words.length - 1].length : 0;
 };
 console.log(words);
 