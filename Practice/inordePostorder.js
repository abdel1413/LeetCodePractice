/**
 * Given two integer arrays inorder and postorder where inorder
 * is the inorder traversal of a binary tree and postorder is the postorder
 *  traversal of the same tree, construct and return the binary tree.
 */

//validate inorder => Left, Root, Right
//    postorder => Left, Right, Root,

// 1) get the last elt from postorder and create a new node  (root) with that elt
//2) check its index in inorder traversal using  root.val
// 3) split inorder array base on the index found  (left elt of index go
//to left subtre while the elts on the right of index go to right sub tree )
// a) assign root's left subtree by recursively call the function and
// pass the first elt up to the root indx inorder array and also first elt up to
// but not inluded the last elt in postorder array.(Bcz last elt is served as our root)
// b) assign root's right subtree by recursively call the function
//and pass the elt that comes right after the rootindex(pushing rootindex to one
// step forward) up to the end elt of inorder array
// (inorder(rootindex + 1))and also rootindex up to but not
// included the last elt in the postorder array
// postorder(rootindex, -1)

var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }

  // create an instane of treenode which is our root from postorder array
  let root = new TreeNode(postorder[postorder.length - 1]);
  //get root's index in inorder array
  let rootIndex = inorder.indexOf(root.val);

  // assign root's left subtree using  the left elements of rootindx from inorder
  // and 0 up to but not included the last elt in postorder
  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );
  console.log("left ", root.left);
  // assign root's right subtree using  the right elements of rootindx from inorder
  // and from rootindex up to but not included the last elt in postorder
  root.right = buildTree(inorder.slice(rootIndex), postorder(rootIndex, -1));
  console.log("right", root.right);

  return root;
};

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
buildTree(inorder, postorder);
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: inorder = [-1], postorder = [-1]
// Output: [-1]
