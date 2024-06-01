class Node {
    size = 'm';

    accept(visitor: Visitor) {
        visitor.visitContainer(this);
    }
}

class ContainerNode {
    childrenCount = 45;
    
    accept(visitor: Visitor) {
        visitor.visitNode(this);
    }
}

class StorageNode {
    level = 60;

    accept(visitor: Visitor) {
        visitor.visitStorage(this);
    }
}

interface Visitor {
    visitContainer(container: ContainerNode)
    visitNode(node: Node);
    visitStorage(storage: StorageNode);
}

class PdfVisitor {
    visitContainer(container: ContainerNode) {
        container.childrenCount;
    }
    visitNode(node: Node) {
        node.size;

    }
    visitStorage(storage: StorageNode) {
        starage.level;
    }
}