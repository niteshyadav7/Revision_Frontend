// let str = "golu";
// for (let i = 0; i < str.length; i++) {
//   let bag = "";
//   for (let j = i; j < str.length; j++) {
//     bag += str[j];
//     console.log(bag);
//   }
// }
// let arr = ["n", "i", "t", "e", "s", "h"];

// for (let i = 0; i < arr.length; i++) {
//   let bag = [];
//   for (let j = i; j < arr.length; j++) {
//     bag.push(arr[j]);
//   }
//   console.log(bag);
// }

//////////////////////////////////////////////////

// var str = "niteshyadav";
// for (var i = 0; i < str.length; i++) {
//   var bag = "";
//   for (var j = i; j < str.length; j++) {
//     bag = bag + str[j];
//     console.log(bag);
//   }
// }
// var str = "nitesh";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let myName = "Nitesh";
// let myNameArr = myName.split("");
// // console.log(myNameArr);
// for (var i = 0; i < myName.length; i++) {
//   //   bag = [];
//   bag = "";
//   for (let j = i; j < myName.length; j++) {
//     // bag.push(myNameArr[j]);
//     bag = bag + myName[j];
//     console.log(bag);
//   }
// }

let num="123"
rev=""
for(let i=num.length-1;i>=0;i--){
    rev+=num[i];
}
console.log(rev);