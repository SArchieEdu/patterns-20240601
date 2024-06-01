class Node {
    paint() {

    }
    calculateSize() {
        return 5;
    }
}

class NodeContainer {
    children: Node[]

    paint() {
        this.children.forEach(node => {
            node.paint()
        });
    }

    calculateSize() {
        const childrenSize = this.children.reduce(
            (sum, node) => sum + node.calculateSize(),
             0
        )

        return childrenSize + 3;
    }
}

const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
const node4 = new Node();
const node5 = new Node();
const node6 = new Node();
const node7 = new Node();
const nodeC1 = new NodeContainer();
const nodeC2 = new NodeContainer();
const nodeC3 = new NodeContainer();
const nodeC4 = new NodeContainer();

nodeC1.children = [node1, node2, nodeC2, nodeC3];
nodeC2.children = [ node3, node4, nodeC4]


function paint(node: NodeContainer) {
    node.paint();
}

paint(nodeC1)

const treeSize = nodeC1.calculateSize();