// conversion string to array
let myFirstNameString = "nitesh";
let myFirstNameArr = myFirstNameString.split("");
console.log(myFirstNameArr);

// Notes : strings are immutable so make it into Array then solve.

// find allsubstrings
let myName = "Nitesh";
let myNameArr = myName.split("");
// console.log(myNameArr);
for (var i = 0; i < myName.length; i++) {
  //   bag = [];
  bag = "";
  for (let j = i; j < myName.length; j++) {
    // bag.push(myNameArr[j]);
    bag = bag + myName[j];
    console.log(bag);
  }
}

// find longest palindromic substring
let str = "nbananama";
let longest = 0;
for (let i = 0; i < str.length; i++) {
  let bag = "";
  for (let j = i; j < str.length; j++) {
    bag = bag + str[j];
    console.log(bag);
    let rev = "";
    for (let k = bag.length - 1; k >= 0; k--) {
      rev += bag[k];
    }
    if (bag == rev && bag.length > longest) {
      longest = bag.length;
    }
  }
}
console.log(longest);
