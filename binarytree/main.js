class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildBalancedTree(arr, start, end) {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(arr[mid]);

        root.left = this.buildBalancedTree(arr, start, mid - 1);
        root.right = this.buildBalancedTree(arr, mid + 1, end);

        return root;
    }

    buildTree(array) {
        array = [... new Set(array)]
        array.sort((a, b) => a - b);
        return this.buildBalancedTree(array, 0, array.length - 1,);
    }

    insert(value, root = this.root) {
        if (root === null) {
            return new Node(value);
        }

        if (value < root.data) {
            root.left = this.insert(value, root.left)
        }
        else if (value > root.data) {
            root.right = this.insert(value, root.right)
        }

        return root;
    }

    getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null)
            curr = curr.left;
        return curr;
    }

    delete(value, root = this.root) {
        if (root === null) {
            return root;
        }

        if (value > root.data) {
            root.right = this.delete(value, root.right)
        }
        else if (value < root.data) {
            root.left = this.delete(value, root.left)
        }
        else {
            if (root.left === null)
                return root.right;
            if (root.right === null)
                return root.left;
            const succ = this.getSuccessor(root);
            root.data = succ.data;
            root.right = this.delete(succ.data, root.right);
        }
        return root;
    }

    inorder(arr = [], root = this.root) {
        if (root === null) return;

        if (root.left) this.inorder(arr, root.left);

        arr.push(root.data);

        if (root.right) this.inorder(arr, root.right);

        return arr;
    }

    preorder(arr = [], root = this.root) {
        if (root === null) return;

        arr.push(root.data);

        if (root.left) this.preorder(arr, root.left);

        if (root.right) this.preorder(arr, root.right);

        return arr;
    }

    postorder(arr = [], root = this.root) {
        if (root === null) return;

        if (root.left) this.postorder(arr, root.left);

        if (root.right) this.postorder(arr, root.right);

        arr.push(root.data);
        return arr;
    }

    height(root = this.root) {
        if (root === null) return 0;

        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);

        if (leftHeight > rightHeight) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1;
        }
    }

    includes(value, root = this.root) {
        if (root.data === value) {
            return true;
        }
        else if (value < root.data && root.left !== null) {
            return this.includes(value, root.left)
        }
        else if (value > root.data && root.right !== null) {
            return this.includes(value, root.right)
        }
        return false;
    }

    depth(value, root = this.root, depth = 0) {
        if (root.data === value) {
            return depth;
        }
        if (value < root.data) {
            return this.depth(value, root.left, depth += 1);
        } else {
            return this.depth(value, root.right, depth += 1);
        }
    }

    isBalanced(root = this.root) {
        const leftHeight = this.height(root.left);
        const reightHeight = this.height(root.right);
        const diff = Math.abs(leftHeight - reightHeight);
        return diff < 2 ? 'true' : 'false';
    }

    rebalance() {
        let arr = this.preorder();
        arr.sort((a, b) => a - b);
        return this.root = this.buildTree(arr);
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}