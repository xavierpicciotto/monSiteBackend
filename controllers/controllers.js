const { Contact } = require('../models/contact');

exports.getContact = (req, res, next) => {
    Contact.find().then(contact => {
        res.status(200).json(contact)
    }).catch(e =>{
        console.log(e)
        res.status(400)
    })
}

exports.newContact = (req, res, next) =>{
    const newMessage = new Contact({
        email: req.body.email,
        message: req.body.message
    });
    console.log(newMessage + "newContact")
    newMessage.save((err, data)=>{
        if(!err)res.status(200).json({
            message: "Success message send :)"
        });
        else{
         console.log(`ERROR ON newContact: ${err}`);
         res.status(400).json({
             message: "Message could not be sent :("
         })   
        } 
    })
}