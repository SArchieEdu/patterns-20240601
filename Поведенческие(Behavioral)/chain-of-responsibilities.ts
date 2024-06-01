const checkisAuthorized = (next) => (action) => {
    if(isAuthorized()) {
        next(action);
    }
}

const log = (next) => (action) => {
    console.log(action)
    next(action);
}

const cache = (next) => (action) => {
    //caching
    next(action);
}

const chainOfResponsibilities = log(
    cache(
        checkisAuthorized((action => rootReducer(state, action)))
    )
)

chainOfResponsibilities({type: createUser, payload: {name: ''}})

class Chain1 {
    nextChain
    constructor(nextChain) {
        this.nextChain = nextChain;
    }

    next(action) {
        if(isAuthorized()) {
            nextChain.next(action);
        }
    }
}
class Chain2 {
    nextChain
    constructor(nextChain) {
        this.nextChain = nextChain;
    }

    next(action) {
        console.log(action)
        nextChain.next(action);
    }
}
class Chain3 {
    nextChain
    constructor(nextChain) {
        this.nextChain = nextChain;
    }

    next(action) {
        // caching
        nextChain.next(action);
    }
}

new Chain1(new Chain2(new Chain3)).next({type: '', payload: ''})