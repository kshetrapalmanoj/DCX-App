const router = require('express').Router();
const Developer = require('../model/Developer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register',async (req,res)=>{

    //Checks email exists in db or not
    const emailExists = await Developer.findOne({email:req.body.email});
    if(emailExists) return res.status(400).send('Email Already Exists');

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    //creating new developer
    const developer = new Developer({
        name:req.body.full_name,
        email:req.body.email,
        password:hashedPassword,
        group:req.body.group
    });
    try {
        //store data
        const developerSave = await developer.save();
        res.send({developer: developer._id});

    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/', (req, res) => {
  Developer.find((err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retrieving Developers :' + JSON.stringify(err, undefined, 2)); }
  });
});



router.post('/login',async (req,res)=>{
    console.log(req.body);

    //checks developer exists or not
    const developer = await Developer.findOne({email:req.body.email});
    if(!developer) return res.status(400).json({message:'Developer does not exist'});

    //checking password
    const validPassword = await bcrypt.compare(req.body.password,developer.password);
    if(!validPassword) return res.status(400).json({message:'Invalid password'});

    const token = await jwt.sign({_id:developer._id},process.env.TOKEN_SECRET,{expiresIn:'5s'});
    if(token) return res.status(200).json(token);
    console.log('Logged in')


})

module.exports = router;
