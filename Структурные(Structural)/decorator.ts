class Player {
    play() {}
    pause() {}
}

class TvPlayer {
    player: Player;
    constructor(player: Player) {
        this.player = player;
    }

    returnToAir() {}
    switchChannel() {

    }

    play() {
        this.player.play();
        this.returnToAir();
    }
    pause() {
        this.player.pause();
    }
}

const player = new Player();
const tvPlayer = new TvPlayer(player);