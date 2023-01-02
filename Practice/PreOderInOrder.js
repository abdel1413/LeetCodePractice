/**
 * 
 * @param {*} preorder 
 * @param {*} inorder 
 * @returns 
 * Given two integer arrays preorder and inorder where
 *  preorder is the preorder traversal of a binary tree and inorder 
 * is the inorder traversal of the same tree, construct and return the binary 
 * tree.
 * 
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
  Input: preorder = [-1], inorder = [-1]
Output: [-1]
 */

// Preorder => Root, then Left then Right [3,9,20,15,7]
// Inorder => Left, then Root, then Right [9,3,15,20,7]

// 1) get the first element in Preoder which constitutes the root
//  preorder[0] => 3
//2) find the  root index  in the Inorder array
// index in Inorder : inorder.indexOf(3) => 1
//3) find what element ara goind to left subtree and those going to right subtree
// by  splitting inorder based on the root index found
// [9,3,15,20,7] => [9],[15,20,7]
//4)build subtrees  on the root  using recursive function
//a) left root : recursive call of preorder from 2nd elt to the  root  index
//exclusively and inorder from 0 to rootIndex exclusively
//b) right root: recursive call preorder from rootIndex to the end and inorder
// from rootindex to the end
// 5) return the root

var buildTree = function (preorder, inorder) {
  let root = new TreeNode(preorder[0]);
  let rootIndex = inorder.indexOf(root.val);
  if (preorder.length === 0) {
    return null;
  } else if (inorder.length === 0) {
    return null;
  } else {
    root.left = buildTree(
      preorder.slice(1, rootIndex + 1),
      inorder.slice(0, rootIndex)
    );
    root.right = buildTree(
      preorder.slice(rootIndex + 1),
      inorder.slice(rootIndex + 1)
    );
  }
  return root;
};

///

let root = new TreeNode(preorder[0]);
let rootIndex = inorder.indexOf(root.val);
if (!preorder.length || !inorder.length) {
  return null;
}

root.left = buildTree(
  preorder.slice(1, rootIndex + 1),
  inorder.slice(0, rootIndex)
);
root.right = buildTree(
  preorder.slice(rootIndex + 1),
  inorder.slice(rootIndex + 1)
);

return root;
