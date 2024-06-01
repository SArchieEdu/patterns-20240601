
abstract class AdFactory {
    createAd() {
        return {
            watcher: this.createWatcher(),
            queue: this.createQueue()
        }
    }

    abstract createQueue();

    abstract createWatcher();
}

class PrerollAdFactory extends AdFactory {
     createQueue() {
        return {}
     };

     createWatcher(){
        return {}
     };
}
class MidrollAdFactory extends AdFactory {
     createQueue() {
        return {}
     };

     createWatcher(){
        return {}
     };
}
class PauseRollAdFactory extends AdFactory {
     createQueue() {
        return {}
     };

     createWatcher(){
        return {}
     };
}