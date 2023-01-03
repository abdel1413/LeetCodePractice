/**
 *
 * @param {*} root
 * @returns
 * 

 // function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;

// }
 * this function check the root if it does not exist
 * we return 0 otherwise we call function itself on each left and right
 * subtree i.e. nodes that are under the root node
 * And then the use the Math.max method to check which one has max height
 *
 */

//algo
// 1) null => depth = 0
// 2) root => depth = 1
//3) root has left and right children and here right child has itself  children
// so we going to appply divide and conquer methodology.
// a) root has depth of 1
// b) take the depth of the left node
// c) take the  depth of the right node
// d) add 1 + max ( a, b)
function TreeNode(root) {
  if (root === null) {
    return 0;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  // [3]
  else {
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
  }
  //  [3, 9,29]
}

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
