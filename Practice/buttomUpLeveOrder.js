/**
 * Given the root of a binary tree, return the bottom-up level order
 *  traversal of its nodes' values. (i.e., from left to right, level by 
 * level from leaf to root).
 * 
 * Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 */
// for level order traversal, we can use BFS (Breath First Search )
//approach and Queue data structure.
//1) whe we process the current node, we need to push its children to the queue
// (in this case from left to right)
//2) creat an array to keep track or rows
// 3) use while loop passing the first elt from the queue as condition
//a) get the length of the queue
//b) create an empty array where we can push the node children(left,right)
//c )looop thru the queue, remove the firs elt and push it to the array
//d) check if the removed elt has left/right child then push it to the queue
// 4) push the row array into the nodearaay

var levelOrderBottom = function (root) {
  let nodeQueue = [root],
    nodeArray = [];
  while (nodeQueue[0]) {
    let queueLength = nodeQueue.length,
      row = [];
    for (let q = 0; q < queueLength; q++) {
      let currentNode = nodeQueue.shift();
      row.push(currentNode.val);
      if (currentNode.left) nodeQueue.push(currentNode.left);
      console.log("current left", currentNode.left);
      if (currentNode.right) nodeQueue.push(currentNode.right);
      console.log("  current right", currentNode.right);
    }
    console.log("row", row);
    nodeArray.push(row);
  }
  return nodeArray.reverse();
};

//Time comp and space comp = O(N)
