interface Tv {
    nextChannel();
    play();
    pause();
}

class Tv implements Tv {
    nextChannel() {

    }
    play() {

    }
    pause() {
        
    }
}
class NewTv implements Tv {
    nextChannel() {

    }
    play() {

    }
    pause() {
        
    }
}

class Controller {
    tv: Tv

    play() {
        this.tv.play()
    }
    pause(){

    }
}

class NewController {
    tv: Tv

    makePlayAction() {
        this.tv.play()
    }
    pause(){

    }
}

const controller = new Controller();
const newController = new NewController();
controller.tv = new Tv();
controller.tv = new NewTv();
newController.tv = new Tv();
newController.tv = new NewTv();
