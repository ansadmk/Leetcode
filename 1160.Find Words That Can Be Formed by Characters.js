/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

 

Constraints:

    1 <= words.length <= 1000
    1 <= words[i].length, chars.length <= 100
    words[i] and chars consist of lowercase English letters
*/
var countCharacters = function (words, chars) {
  var result = 0;
  var flag = "";
  for (let index = 0; index < words.length; index++) {
    flag = "";
    let chars2=chars.split('')
    for (let i = 0; i < words[index].length; i++) {
      if (chars2.includes(words[index].charAt(i))) {
        flag += words[index].charAt(i);
        const target=chars2.indexOf(words[index].charAt(i))
        chars2.splice(target,1)
        if (flag == words[index] && i==flag.length-1 ) {
          result += words[index].length;
        }
      }
    }
  }
return result
};