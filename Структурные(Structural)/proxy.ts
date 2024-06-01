class RequestService {
    makeRequest(url) {
        return {}
    }
}

class RequestServiceWithCache {
    requestService = new RequestService();
    cache = new Map();

    makeRequest(url) {
        if(!this.cache.has(url)) {
            this.cache.set(url, this.requestService.makeRequest(url));
        }

        return this.cache.get(url);
    }
}

const userService = {
    isAuthorized: true,

    authorize() {

    }
}

const userSettings = {
    login: '',
    password: '',
}

const AccessChecker = {
    get(target, phrase) {
      if (phrase in target && userService.isAuthorized) { 
        return target[phrase]; 
      }

        throw new Error('Access denied');
    }
}
  
const userSettingsWithAuthorizzationCheck = new Proxy(userSettings, AuthorizationProxy);