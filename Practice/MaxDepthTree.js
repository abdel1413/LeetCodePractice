/**
 *
 * @param {*} root
 * @returns
 * this function check the root if it does not exist
 * we return 0 otherwise we call function itself on each left and right
 * subtree i.e. nodes that are under the root node
 * And then the use the Math.max method to check which one has max height
 *
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
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
