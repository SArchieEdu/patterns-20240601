interface PlayerState {
    play();
    pause();
    seek();
    stop();
}


const playing: PlayerState = {
    play() {
        console.log('Already playing')
        return this;
    };
    pause(){
        return waitingUserAction;
    };
    seek(){
        return seeking
    };
}
const waitingUserAction: PlayerState = {
    play() {
        return playing;
    };
    pause(){
        return this;
    };
    seek(){
        return seeking
    };
}
const seeking: PlayerState = {
    play() {
        console.log('Please wait')
        return this;
    };
    pause(){
        return waitingUserAction;
    };
    seek(){
        return this;
    };
}

class Player {
    state: PlayerState

    play() {
        this.state = this.state.play();
    };
    pause(){
        this.state = this.state.pause();
    };
    seek(){
        this.state = this.state.seek();
    };
}