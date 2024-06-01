interface Prototype<Entity> {
    clone(): Entity;
}

class StorageNode implements Prototype<StorageNode> {
    limit: 0;
    type;
    // property
    clone() {
        const storage =  new StorageNode();
        storage.type = this.type;
        storage.liit = 0;

        return storage;
    }
}

new StorageNode().clone();