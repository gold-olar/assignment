const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

//creating a schema
const UserSchema = new Schema({
    firstName:{
        type: String,
        required : true
    },
    lastName:{
        type: String,
        required : true
    },
    username:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;



