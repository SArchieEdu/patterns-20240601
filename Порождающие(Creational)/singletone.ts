let instance;

class Singletone {
    constructor() {
        if(instance) {
            throw new Error("Instance already defined");
            
        }

        instance = this;
    }

    getInstance() {
        return this;
    }
}


export const userService = {
    currentUser = {};
    loadUser() {

    }
};

Object.freeze(userService)
