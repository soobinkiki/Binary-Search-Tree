class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    addNum(data) {
        const node = this.root
        if (node === null) {
            this.root = new Node(data) 
            return
        } else {
            const searchTree = nodes => {
                if (data < nodes.data) {
                    if (nodes.left === null) {
                        nodes.left = new Node(data)
                        return
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.left)
                    }
                } else if (data > nodes.data) {
                    if (nodes.right === null) {
                        nodes.right = new Node(data)
                        return 
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.right)
                    }
                } else {
                    return null
                }
            } 
            searchTree(node)
        } 
    }
}
