const mongoose = require('mongoose');
const { Schema } = mongoose;
const AdminSchema= new Schema({
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
        unique: true
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
const Admin = mongoose.model('admin',AdminSchema);
module.exports =Admin;