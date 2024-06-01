class Abr {
    calculate() {

    }
}

class DrmController {
    checkDrm() {

    }
}

class VideoController {
    startPlaying(settings) {

    }
}


class Player {
    abr = new Abr();
    drm = new DrmController();
    video = new VideoController();


    play() {
        const settings = this.abr.calculate();
        const isAvailable = this.drm.checkDrm();
        if(isAvailable) {
            this.video.startPlaying(settings)
        }
    }
    pause(){}
}


const player = new Player();
player.play();
player.pause();