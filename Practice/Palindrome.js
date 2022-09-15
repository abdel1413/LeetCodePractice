//1 get the first and the last

function palindromeWithInteger(x) {
  let num = x.toString();
  let end = num.length - 1;
  for (let i = 0; i < num; i++) {
    if (num[i] !== num[end - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromeWithInteger(2222)); //=>true
console.log(palindromeWithInteger(22522)); //false
console.log(palindromeWithInteger("a man, a plan, a canal. panama")); //false

function palindromeWithString(string) {
  let len = string.length;
  let end = string.length - 1;
  let mid = len / 2;
  for (let i = 0; i < mid; i++) {
    if (string[i] !== string[end - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeWithString("racecar")); //=>true

console.log(palindromeWithString("race a car")); //=>false

//using regular Expression to eliminate non alphabetic characters
function palindromeWithRegularExpr(str) {
  let re = /[\W_]/g; //same as /[^A-Za_z0-9]/g
  //ie any chara not inclose in  /[^A-Za_z0-9]/g and g is global

  //input race Car

  //convert all char to lower case
  let tolowercase = str.toLowerCase();
  console.log(tolowercase); //=> race car

  //remove any non alphanumeriq char using regExp
  let replaceChar = tolowercase.replace(re, "");
  console.log(replaceChar); //=> racecar

  //now take the inverse of replechar by :
  //1 )split string into substring
  let spliting = replaceChar.split("");
  console.log(spliting); //=> ['r','a','c','e','c','a','r']

  //2) then reverse
  let reverse = spliting.reverse();
  console.log(reverse); //=> ['r','a','c','e','c','a','r']

  //3) and finaly join all the character together
  let joining = reverse.join("");
  console.log(joining); //=> racecar

  //now that we got the string (replaceChar) and
  // its reversion (joining) format that
  //we wanted, we can compare them
  return replaceChar === joining; //=> true
}
console.log(palindromeWithRegularExpr("a man, a plan, a canal. panama"));
console.log(palindromeWithRegularExpr("a race car")); //=> false
console.log(palindromeWithRegularExpr("22522"));

function palindromeloop(number) {
  let num = number.toString();
  let len = num.length;
  let end = len - 1;
  if (len === 0) {
    console.log("you didn't enter any value");
  }
  for (let i = 0; i < len; i++) {
    for (let j = end; j >= 0; j--) {
      if (num[i] !== num[j]) {
        return false;
      } else return true;
    }
  }
}

console.log(palindromeloop("racecar"));

function polindromeWithLoop(string) {
  let re = /[\W_]/g; //or /[^A-Za-z0-9]/g
  string = string.toLowerCase().replace(re, "");
  let len = string.length;
  let mid = Math.round(len / 2);

  let end = len - 1;
  //race a car
  // i = 0 (r) and end = 7 -0 = 7 (r)  ==> true
  // i = 1 (a)end = 7-1 = 6 (a) ==> true...
  for (let i = 0; i < mid; i++) {
    if (string[i] !== string[end - i]) {
      return false;
    }
  }
  return true;
}

console.log(polindromeWithLoop("a man, a plan, a canal. panama")); //true
console.log(polindromeWithLoop("a race car")); //=> false
console.log(polindromeWithLoop("22522")); //=>true

/**
 *
 * @param {*} string
 * @returns
 *  input racecar
 * palindrome (racecar) => compare r & r => true
 * compare c & c => true
 * e => true since length  = 1  ==> True
 *
 * (race car) => False:
 * r & r => true
 * a & a => true
 * c & c => true
 * e & empty => false  ==> False
 */

//recursive
const palindromeRecursive = (string) => {
  let end = string.length - 1;
  if (string.length === 1) {
    return true;
  }

  return (
    string[0] === string[end] && palindromeRecursive(string.substr(1, end))
  );
};
const helper = (string) => {
  return palindromeRecursive(string.toString());
};

/**
 * palindrome(22522) => palindrome(252) => palindrome(5) => true
Remove first and last number each time

22522
Compare 2 to 2
Compare on palindrome(252)
Compare 2 to 2
Compare to palindrome(5)
Palindrome(5), 5's length is <= 1, so return True

Whole thing returns true.
 */
