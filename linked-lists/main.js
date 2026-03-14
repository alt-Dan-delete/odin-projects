class LinkedList {
    constructor() {
        this.nodes = [];
        this.currentTail = null;
        this.currentHead = null;
    }

    static Node = class Node {
        constructor(value = null, nextNode = null) {
            this.value = value;
            this.nextNode = nextNode;
        }
    }

    append(value) {
        if (this.nodes.length === 0) {
            this.nodes.push(new LinkedList.Node(value));
        }
        else {
            this.currentNode = new LinkedList.Node(value)
            this.nodes.push(this.currentNode);
            const i = this.nodes.indexOf(this.currentNode);
            this.nodes[i - 1].nextNode = this.currentNode;
        }
    }

    prepend(value) {
        if (this.nodes.length === 0) {
            this.nodes.unshift(new LinkedList.Node(value));
        }
        else {
            this.currentNode = new LinkedList.Node(value);
            this.nodes.unshift(this.currentNode);
            const i = this.nodes.indexOf(this.currentNode);
            this.nodes[i].nextNode = this.nodes[i + 1];
        }
    }

    size() {
        return this.nodes.length;
    }

    head() {
        if (this.nodes) {
            return this.nodes[0];
        }
        else
            return
    }

    tail() {
        if (this.nodes) {
            return this.nodes[(this.nodes.length - 1)];
        }
        else
            return
    }

    at(index) {
        if (this.nodes) {
            console.log(`at ${index}:`)
            return this.nodes[index];
        }
        else
            return
    }

    pop() {
        if (this.nodes) {
            return this.nodes.shift();
        }
        else return;
    }

    findIndex(value) {
        const index = this.nodes.findIndex(node => {
            return node.value === value;
        })
        return index;
    }

    toString() {
        if (this.nodes) {
            let temp = '';
            this.nodes.forEach(element => {
                temp += `( ${element.value} ) -> `
            });
            temp += this.tail().nextNode;
            console.log(temp);
        }
        else
            return '';
    }

}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("turtle");
list.prepend('lion')

list.toString();