// Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.


const insertIntoBST = (root, val) => {
    if(root===null){
        root = new TreeNode(val)
        return root 
    }
    if(root.val > val){
     root.left = insertIntoBST(root.left, val);
    } else{
     root.right =  insertIntoBST(root.right, val);   
    }

    return root; 
}
