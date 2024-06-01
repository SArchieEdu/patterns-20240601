class Snapshot {
    text: '',
    styles: ['']
}

class Editor {
    text: '',
    styles: ['']

    makeSnapshot(): Snapshot {
        const snapshot = new Snapshot()
        snapshot.text = this.text;
        snapshot.styles = this.styles;

        return snapshot;
    }
    
    restore(snapshot: Snapshot) {
        this.text = snapshot.text;
        this.styles = snapshot.styles;
    }
}