/**
 *
 * @param {*} numsArray
 * @param {*} target
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, return
 *  the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
 * NOTE here we need to use binary search since
 * the Time complexity is O(log(n))
 */

function searchInsert(numsArray, target) {
  let leftPointer = numsArray[0]; // first index of numsArray
  let rightPointer = numsArray[numsArray.length - 1];
  let mid;
  let answer = 0; // current answer

  while (leftPointer <= rightPointer) {
    mid = (leftPointer + rightPointer) / 2;

    console.log(mid);
    if (numsArray[mid] === target) {
      return mid;
    }
    if (numsArray[mid] < target) {
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
