class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class TreeCalculate {
    constructor() {
        this.root = null;
    }

    addNum(data) {
        const node = this.root
        if (node === null) {
            this.root = new Node(data) 
            return
        } 
    }
}
