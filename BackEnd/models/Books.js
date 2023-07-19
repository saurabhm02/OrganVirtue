const mongoose = require('mongoose');
const { Schema } = mongoose;
const BooksSchema= new Schema({
    user: { 
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type: 'string',
        required: true,
    },
    author:{
        type: 'string',
        required: true,
    },
    price:{
        type: 'string',
        required: true,
    },
    image:{
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    tag:{
        type: 'string',
        required: true,
    },
    covertype:{
        type: 'string',    
    },
    pages:{
        type: 'string',    
    },
    date:{
        type: Date,
        default: Date.now
    }
})
module.exports =mongoose.model('books',BooksSchema);