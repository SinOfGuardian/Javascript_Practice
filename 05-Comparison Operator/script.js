let item = "window";

if (item != "engine") {
  console.log("Not Engine!");
}

let score = 5;
if (score >= 60) {
  console.log("pass");
} else if (score < 10) {
  console.log("Meet the teacher");
} else {
  console.log("not pass");
}

//another method of if else Statement
let isEngine = item == "engine";
console.log(isEngine);

//if(isEngine){

//}

//Challenge
let balance = 100;
let itemprice = 10;

//1. Check balance
//2. if they buy, update balance

if (balance >= itemprice) {
  //update balance
  //balance = balance - itemprice;
  balance -= itemprice;
  console.log("item purchased");
  console.log(balance);
} else {
  console.log("not enough balance");
}
