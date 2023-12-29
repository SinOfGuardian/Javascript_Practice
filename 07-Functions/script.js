// 1 hour = 60 minutes
function hourToMinutes(hours) {
  let result = hours * 60;
  console.log(result);
  return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);
//console.log(a);
let dayToHours = function (days) {
  return days * 24;
};
let c = dayToHours(1);
console.log(c);

//variable declaration
let balance = 10;
let stock = 50;
let price = 5;
let quantity = 10;

function sellItem(quantity) {
  // 1. check if we have stock
  if (balance <= stock) {
    //reduce = stock - quantity;
    //stock = stock - quantity;
    stock -= quantity;
    //balance = balance + price * quantity;
    balance += price * quantity;

    console.log("purchase completed", balance, stock);
  } else {
    console.log("not enough stock");
  }
}

sellItem(1);
sellItem(1);
sellItem(1);
sellItem(1);
sellItem(1);
