const missingElement = (numbers) => {
  let missings = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(i) == -1) {
      missings.push(i);
    }
  }
  return missings;
};

console.log(missingElement([1, 3, 4, 5, 6, 7, 9]));
