/**
 *
 * @param {*} numsArray
 * @param {*} target
 * NOTE here we need to use binary search since
 * the Time complexity is O(log(n))
 */

function searchInsert(numsArray, target) {
  let leftPointer = 0; // first index of numsArray
  let rightPointer = numsArray.length - 1; // last index of numsArray
  let mid;
  let answer = 0; // current answer

  while (leftPointer <= rightPointer) {
    mid = Math.round(leftPointer + rightPointer) / 2;
    if (numsArray[mid] === target) {
      return mid;
    }
    if (numsArray[mis] < target) {
      //move left pointer to one step forward
      leftPointer = mid + 1;
      answer = mid + 1;
    } else {
      rightPointer = mid - 1;
      answer = mid - 1;
    }
  }

  return answer;
}

console.log(searchInsert([1, 3, 5, 6], 7));
//=>2
//VM21105:10 3
//VM21105:27 4

// leftPointer = 0
//rightPointer = 3
//answer = 0

//1)inside while loop:
// mid = Math.round(l + r/2 )=> 0+3/2 = 2
//nums[2] = 5 < 7
// so update leftponter
// letpointer = mid + 1 ==> 2+1 = 3
//update answer = mid+1 ==> 2 + 1 = 3

//2) go back to while loop
// is 3 <= 3 yes
// mid = Math.round(3 + 3)/ = 6/2 = 3
//nums[3] === target? 6 === 7 no
//is 6 < 7 yes
// left = mid + 1 = 4;
//ans = mid + 1 = 4

//3) go back to while loop
// is 4 <= 3 no  Exist the loop and return the answer
