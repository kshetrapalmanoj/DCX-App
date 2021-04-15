const router = require('express').Router();
const Contact = require('../model/Contact');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register',async (req,res)=>{

    const contact = new Contact({
        full_name:req.body.full_name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        location:req.body.location
    });
    try {

        const developerSave = await contact.save();
        res.send({contact: contact._id});

    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/',async (req, res) => {
  try {let {page,size}=req.query;
  if(!page){
    page=1
  }
  if(!size)
  {
    size=5
  }
  const limit=parseInt(size);
  const skip=(page-1)*size;


  const developerSave=await Contact.find() .limit(limit).skip(skip)
       res.send(docs);
 } catch(err)
       {
res.sendStatus(400).send(error.message)
       }


})




module.exports = router;
