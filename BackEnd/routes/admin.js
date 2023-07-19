const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const User = require('../models/User');
const fetchuser = require('../middleware/getuser')
const { body, validationResult } = require('express-validator');
const router =  express.Router();
const JWt_SECRET = 'myjwtsom@u';

router.post('/createadmin',[
    body('name','enter a valid name').isLength({ min: 3 }),
    body('email','enter a valid email').isEmail(),
    body('password','enter a valid password atleast of 5 character').isLength({ min: 5 })
],async(req,res) => {
  let success = false;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({success,errors});
    }
    try {
    let admin = await Admin.findOne({ email: req.body.email});
    if(admin)
    {
        return res.status(400).json({ success,message: "a user with this email already exists"})
    }
    const salt= await bcrypt.genSalt(10);
    const secpassword = await bcrypt.hash(req.body.password,salt);
     admin= await  Admin.create({
        name: req.body.name,
        password: secpassword,
        email: req.body.email,
      })
      const data={
        user: {
        id:admin.id
        }
      }
      const authtoken=jwt.sign(data,JWt_SECRET);
      // console.log("user created successfully");
      success=true;
      res.json({success,authtoken});
    }
    catch (err) {
        console.error(err);
        success=false;
        res.status(400).json({success, message: err})
    }
})
//todo: login
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      let admin = await Admin.findOne({ email });
      if (!admin) {
        success = false;
        return res.status(400).json({success, error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, admin.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: admin.id
        }
      }
      const authtoken = jwt.sign(data, JWt_SECRET);
      success = true;
      res.json({ success, authtoken });
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});
router.get('/getuserdata',fetchuser, async (req, res)=>
{
      try {
        let users= await User.find({}).select("-password");
        res.json(users);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})
router.delete('/deleteuser',fetchuser, async (req, res)=>{
    try{
        let user= await User.findById(req.body.id);
           if(!user) {
            
               res.status(404).send("Not Found");   
           }
           else{

             user = await User.findByIdAndDelete(req.body.id);   
             res.json(user);
           }
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;


