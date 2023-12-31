/* 
First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "loveleetcode"
Output: 0

*/

function uniqueChar(s) {
    const charCount = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        }
        else {
            charCount[char]++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char] === 1) {
            return i;
        }
    }
    return -1
}

console.log(uniqueChar("loveleetcode"));
