// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var md5 = require('MD5');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        role		 : String
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return md5(password);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return md5(password), this.local.password;
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

