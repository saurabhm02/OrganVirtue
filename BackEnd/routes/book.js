const express = require('express');
const router =  express.Router();
const fetchuser = require('../middleware/getuser');
const Books = require('../models/Books');
const { body, validationResult } = require('express-validator');

router.post('/addbooks', fetchuser,[
    body('title','title must be of 3 character').isLength({ min: 3 }),
    body('description','description must be of 5 character').isLength({ min: 5 })
], async (req, res)=>{
    try {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {title,author,price,image, description ,covertype,pages,tag} = req.body;
       

            const books = new Books({title,author,price,image,description,tag,covertype,pages,user:req.user.id});
            const savedBooks= await books.save();
            res.json(savedBooks);
        
    } 
    catch (err) {
        console.error(err);
        res.status(400).json({ error: err})
    }
})

router.get('/getallbooks',fetchuser, async (req, res)=>{
    try {
        let books = await Books.find({});
        res.json(books);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err})
    }
})
router.get('/getbooksbyuser',fetchuser, async (req, res)=>{
    try {
        let books = await Books.find({ user: req.user.id});
        if(books.length > 0) {
            res.json(books);
        }
        else{
            {res.json({message:"no books"});}
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err})
    }
})
router.post('/getbytag',fetchuser, async (req, res)=>{
    try {
        let books = await Books.find({ tag: req.body.tag});
        if(books.length > 0) {
            res.json(books);
        }
        else{
            {res.json({message:"no books"});}
        }
    } 
    catch (err) {
        console.error(err);
        res.status(400).json({ error: err})
    }
})
router.delete('/delete',fetchuser, async (req, res)=>{
    try {
        let book=await Books.findById(req.body.id);
        if(!book)
        {
            res.status(404).send("Not Found");
        }
        else
        {
            book=await Books.findByIdAndDelete(req.body.id);
            res.json(book);
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error})
    }
})

module.exports = router;