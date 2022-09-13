/**
 *
 * @param {*} array
 * //array [1,2,4,3,6] n = 5 => sum = n* (n +1)/2  => 5 * 6/2 = 15
 * // real sum : 1+2+4+3 +6 = 10
 * // the result for n length - real sum : 15 -10 = 5
 */

function missingElement(array) {
  let n = array.length;

  let sum1 = Math.round(n * (n + 1)) / 2;
  console.log(sum1);
  let sum2 = 0;
  let difference;
  //using for loop
  //   for (i = 0; i < array.length; i++) {
  //     sum2 += array[i];
  //   }

  //using reduce methd
  sum2 = array.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log("sum2", sum2);
  difference = sum1 - sum2;
  if (difference <= 0) {
    difference = 0;
    return ` the only missing element is: ${difference}`;
  } else {
    return ` the only missing element is: ${difference}`;
  }
}

console.log(missingElement([0, 1, 2, 4])); // 3

function missing(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != i) {
      return `the missing element is ${i}`;
    }
  }
}
console.log(missing([0, 1, 2, 3, 5])); //4
