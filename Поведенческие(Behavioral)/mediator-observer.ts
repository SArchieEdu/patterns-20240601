class Mediator {
    a1
    notify(sender) {
        if(sender === 'Actor1') {
            this.reactOnA1();
        }
    }

    reactOnA1() {
        this.a1.react();
    }
    reactOnA2() {}
    reactOnA3() {}
    reactOnA4() {}
}

class Actor1 {
    mediator: Mediator

    make() {
        this.mediator.notify('Actor2')
    }

    react() {

    }
}
class Actor2 {
    mediator: Mediator

    make() {
        this.mediator.notify('Actor1')
    }
    react() {
        
    }
}
class Actor3 {
    mediator: Mediator

    make() {
        this.mediator.notify('Actor4')
    }
    react() {
        
    }
}
class Actor4 {
    mediator: Mediator

    make() {
        this.mediator.notify('Actor3')
    }
    react() {
        
    }
}

const Store = {
    reducer = (state, action) => ({})
    state = {};
    subscribers = new Set();

    subcribe(callback) {
        this.subscribers.set(callback);
        callback(this.state);

        return () => this.subscribers.delete(callback)
    }

    // unsubscribe(callback) {
    //     if(this.subscribers.has(callback)) {
    //         this.subscribers.delete(callback)
    //     }
    // }

    dispatch(action) {
        this.state = this.reducer(this.state, action);

        this.subscribers.forEach(callback => callback(this.state))
    }
}


const EventBuss = {
    subscribers: new Map<string, Set<() => void>>(),
  
    addEventListener(event, callback) {
      let eventSet = this.subscribers.get(event);
  
      if (!eventSet) {
        eventSet = new Set();
        this.subscribers.set(event, eventSet);
      }
  
      eventSet.add(callback);
    },
  
    removeEventListener(event, callback) {
      const eventSet = this.subscribers.get(event);
      eventSet.delete(callback);
    },
  
    emit(event) {
      const eventSet = this.subscribers.get(event);
  
      if (eventSet) {
        eventSet.forEach((callback) => callback(event));
      }
    },
  };
  
  const Publisher = {
    eventBuss: EventBuss,
  
    publish(event) {
      this.eventBuss.emit(event);
    },
  };
  
  const callback = (event) => {};
  EventBuss.addEventListener("click", callback);
  EventBuss.removeEventListener("click", callback);