//Challenge
let player = {
  health: 100,
  fun: 0,
  //   eatApple() {
  //     console.log("eat apple");

  //     this.health += 10;
  //     console.log(this.health);
  //   },
  //   eatCandy() {
  //     this.health -= 5;
  //     this.fun += 5;
  //   },

  play() {
    this.fun += 10;
  },

  eat(food) {
    if (food == "apple") {
      this.health += 10;
    } else if (food == "candy") {
      this.health -= 5;
      this.fun += 5;
    }
  },
};

player.eatApple();
player.play();
player.eatCandy();

console.log(player);

player.eat("apple");
console.log(player);
