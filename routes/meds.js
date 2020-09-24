const express = require('express');

const router = express.Router();

const accountSid = 'AC7fcba5d4cf0d6b40cbaacc2855929f98'; 
const authToken = 'a7c699d2d59b8e3ea8b6d571fcc70e53'; 
const client = require('twilio')(accountSid, authToken); 


//SUBMIT A NEW //Medicine
router.post('/', async (req, res) => {

    if (req.body.userName === "" || req.body.userPhone === "") {
        res.status(400).send(error.details[0].message)
        return;
    }
    if(req.body){
        console.log("req.body");
        console.log(req.body);
    }
    InWhatsApp = "";
    if (req.body.userInWhatsapp) {
        InWhatsApp = "~Available in WhatsApp";
    }
    date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    appointmentDate=new Date();
    if(req.body.userAppointmentDate !=null){
        appointmentDate = new Date(req.body.userAppointmentDate)
    }
    body_message = 'New Appointment\n*******************\nname: ' + req.body.userName + '\nPhone No: ' + req.body.userPhone + '\nAppointment Date: ' + appointmentDate + '\n' + InWhatsApp + '\n\nGenerated @ ' + date;



    client.messages
        .create({
            body: body_message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919944585750'
        })
        .then(message => console.log(message.sid))
        .done()


    res.status(200).send({ message: "Notification sent successfully!!", body: req.body });


})
router.post('/order', async (req, res) => {

    if (req.body.message === "") {
        res.status(400).send(error.details[0].message)
        return;
    }
    if(req.body){
        console.log("req.body");
        console.log(req.body);
    }
    InWhatsApp = "";
    if (req.body.userInWhatsapp) {
        InWhatsApp = "~Available in WhatsApp";
    }
    totalAmount=0;
    if(req.body.amount && req.body.quantity){
        totalAmount=req.body.amount*req.body.quantity;
    }
    date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    body_message = 'New Order\n***********\nname: ' + req.body.userName + '\nPhone No: ' + req.body.userPhone +'\n' +InWhatsApp+'\n\nInterested in \nProduct: ' + req.body.product + '\nAmount: ' + req.body.amount + '\nNo. of Packages: ' + req.body.quantity + '\n******************\nTotal Amount: ' + totalAmount +'\n\nGenerated @ ' + date;



    client.messages
        .create({
            body: body_message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919944585750'
        })
        .then(message => console.log(message.sid))
        .done()


    res.status(200).send({ message: "Notification sent successfully!!" , body: req.body});


})

module.exports = router;