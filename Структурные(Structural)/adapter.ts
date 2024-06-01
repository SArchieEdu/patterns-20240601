interface Player {
    play();
    stop();
}

class Player1 {
    play() {

    }

    stop() {

    }
}

class Player2 {
    startPlaying() {}
    stopPlaying() {}
}

class Player2Adapter implements Player {
    player: Player2;

    constructor(player: Player2) {
        this.player = player;
    }

    play() {
        this.player.startPlaying();
    }

    stop() {
        this.player.stopPlaying();
    }
}


function play(player: Player) {
    player.play();
    player.stop();
}

play(new Player1())
play(new Player2Adapter(new Player2()))