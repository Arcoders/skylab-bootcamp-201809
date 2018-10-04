var safeBox = {

    saveSecret: function(secret, password) {
        console.log('your secret was encrypted: ' + window.btoa(secret+password)); 
        return this.retrieveSecret(secret);
	},

    retrieveSecret: function(password) {
        console.log(secret)
    }
}


safeBox.saveSecret('My new secret', 'ismael-1995');

safeBox.retrieveSecret('ismael-1995');


