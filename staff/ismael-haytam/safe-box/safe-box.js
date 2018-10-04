function SafeBox() {
    
    var secret

    this.saveSecret = function(secret, password) {
        return function() {
            return window.btoa(secret+password); 
        }
    }

    this.retrieveSecret = function(password) {
        return secret;
    }
}

var safeBox = new SafeBox();

console.log(safeBox.saveSecret('Lorem ipsum dolor set amet', 'ismael-1995'));
console.log(safeBox.retrieveSecret('ismael-1995'));