class Auth {

    constructor(props) {
        this.authenticated = false;
    }

    logIn(callback) {
        this.authenticated = true;
        callback();
    }
    
    logOut(callback) {
        this.authenticated = false;
        callback();
    }

    isAuthentication() {
        return this.authenticated;
    }
}

export default new Auth();