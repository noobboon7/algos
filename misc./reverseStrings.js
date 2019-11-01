// uses Javascript functions 
const reverseString = (str) => {
    return str.split("").reverse().join("");
};

// Iterative approach 
function reverseStr(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// Recursive 
function reverseS(str) {
    if (str === "")
      return "";
    else
      return reverseS(str.substr(1)) + str.charAt(0);
  }




reverseString('hello');
reverseStr('hello');
reverseS('hello');