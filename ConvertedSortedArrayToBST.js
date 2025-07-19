// Constructor for tree node
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// Function to convert array to BST
var ConvertedToBST = function(arr) {
    let root = null;

    let insertNode = function(root, value) {
        if (root === null) {
            return new TreeNode(value);
        }
        if (value > root.val) {
            root.right = insertNode(root.right, value);
        } else {
            root.left = insertNode(root.left, value);
        }
        return root;
    };

    for (let val of arr) {
        root = insertNode(root, val);
    }

    return root;
};

// Test array
let arr = [0, 2, 4, 5, 6, 7, 8, 27];

// Store the root of the tree
let root = ConvertedToBST(arr);

// In-order traversal to check
function inOrderTraversal(node) {
    if (!node) return;
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
}

inOrderTraversal(root);
