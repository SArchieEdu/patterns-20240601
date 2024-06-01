interface Player {
    play();
}

function createMoviePlayer(): Player {
    return {
        play() {

        }
    }
}
function createSeriesPlayer(): Player {
    return {
        play() {
            //other actions
        }
    }
}

function startPlaying(createPlayer: () => Player) {
    createPlayer().play()
}

startPlaying(createMoviePlayer)
startPlaying(createSeriesPlayer)



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

new PauseRollAdFactory().createAd();


function planAd(adFactory: AdFactory) {
    adFactory.createAd();
}

planAd(new PauseRollAdFactory())
planAd(new PrerollAdFactory())