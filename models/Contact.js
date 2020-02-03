const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

//creating a schema
const ContactSchema = new Schema({
    firstName:{
        type: String,
        required : true
    },
    lastName:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const ContactModel = mongoose.model('Contact', ContactSchema);
module.exports = ContactModel;