const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema= new Schema({
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    address:{
        type: 'string',
        required: true,
        
    },
    number:{
        type: 'string',
        required: true,
        
    },
    password:{
        type: 'string',
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },

})
const User = mongoose.model('user',UserSchema);
module.exports =User;