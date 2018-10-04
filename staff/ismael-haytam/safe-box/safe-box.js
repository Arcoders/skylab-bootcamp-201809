var safeBox = {

    saveSecret: function(secret, password) {
        if (!password || !password.length || !password.trim()) throw Error('invalid password');
        this.secret = secret;
	},

    retrieveSecret: function(password) {
        return this.secret
    }
}

