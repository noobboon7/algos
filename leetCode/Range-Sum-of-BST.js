// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

 

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23
 

// Note:

// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

var rangeSumBST = function(root, L, R) {
    let sum = 0; 
    const transversal = (root, L, R)=>{
        if (!root.left && !root.right) {
            return;
        }
        
        if(root.left){
            if(root.left.val >= L && root.right.val <= R){
                sum += root.left.val;
            }
            transversal(root.left , L, R);
        }
         if(root.right){
            if(root.right.val >= L && root.right.val <= R){
                sum += root.right.val;
            }
            transversal(root.right , L, R);
        }
    };
           transversal(root, L, R);
        if(root.val >= L && root.val <= R){
            sum += root.val;
        }
    // console.log(sum);
    return sum;
};