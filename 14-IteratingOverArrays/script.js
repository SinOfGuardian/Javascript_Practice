let scores = [10, 20, 10];

let i = 0;
while (i < scores.length) {
  scores[i]++;
  i++;
}

console.log(scores);

for (j = 0; j < scores.length; j++) {
  scores[j]++;
}
console.log(scores);

scores.forEach(function (entry, index) {
  //console.log(entry, index);
  //entry++;

  scores[index]++;
});
console.log(scores);

let catalog = [
  {
    title: " JS For Beginners",
    author: "Zenva",
    copies: 1,
  },
  {
    title: " HTML For Beginners",
    author: "Zenva",
    copies: 1,
  },
  {
    title: " CSS For Beginners",
    author: "XYZ",
    copies: 1,
  },
];

catalog.forEach(function (entry) {
  // console.log(entry);
  if (entry.author == "Zenva") {
    entry.copies++;
  }
});

console.log(catalog);
