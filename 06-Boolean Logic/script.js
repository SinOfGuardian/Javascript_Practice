let distance = 150;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineFuntioning = true;

console.log(distanceCondition);

if (!isEngineFuntioning || distance > 200) {
  console.log("wont make it ");
} else if (distanceCondition && fuel >= 100) {
  console.log("you will make it");
} else if (distance < 100 && fuel >= 25) {
  console.log("you will make it");
}
