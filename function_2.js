
function  isPalindrome(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
        
    }
    return newString === str;
}
console.log(isPalindrome("kokokokokokok"));