function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}

//Time complicity is O(n^2) due to two loops

console.log(twoSum([2, 7, 11, 15], 9));
//=>(2) [0, 1]

//using two indicators
function twoSum2(array, target) {
  //create two pointers left and rightPointer
  let leftPointer = 0,
    rightPointer = array.length - 1;
  //loop using while loop
  while (leftPointer < rightPointer) {
    let currenSum = array[leftPointer] + array[rightPointer];
    console.log(currenSum);
    if (currenSum < target) {
      leftPointer += 1;
    } else if (currenSum > target) {
      rightPointer -= 1;
    } else {
      return [leftPointer, rightPointer];
    }
  }
}

console.log(twoSum2([2, 7, 11, 15], 9));
//=>(2) [0, 1]
//Time complexity O(n)
