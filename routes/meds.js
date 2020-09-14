const express = require('express');

const router = express.Router();

const accountSid = 'AC8c6681836c7626d3ccfe722bea3413dc'; 
const authToken = 'ef1ab8e9b15cd2ab37684d306b9e90cc'; 
const client = require('twilio')(accountSid, authToken); 


//SUBMIT A NEW //Medicine
router.post('/notify', async (req, res) => {

    if (req.body.message === "") {
        res.status(400).send(error.details[0].message)
        return;
    }

    InWhatsApp = "";
    if (req.body.userInWhatsapp) {
        InWhatsApp = "~Available in WhatsApp";
    }
    date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    body_message = 'New Appointment\n*******************\nname: ' + req.body.userName + '\nPhone No: ' + req.body.userPhone + '\nAppointment Date: ' + req.body.userAppointmentDate + '\n' + InWhatsApp + '\n\nGenerated @ ' + date;



    client.messages
        .create({
            body: body_message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919944585750'
        })
        .then(message => console.log(message.sid))
        .done()


    res.status(200).send({ message: "Notification sent successfully!!" });


})
router.post('/order', async (req, res) => {

    if (req.body.message === "") {
        res.status(400).send(error.details[0].message)
        return;
    }

    InWhatsApp = "";
    if (req.body.userInWhatsapp) {
        InWhatsApp = "~Available in WhatsApp";
    }
    date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    body_message = 'New Order\n***********\nname: ' + req.body.userName + '\nPhone No: ' + req.body.userPhone +'\n' +InWhatsApp+'\n\nInterested in \nProduct: ' + req.body.product + '\nAmount: ' + req.body.amount + '\n\nGenerated @ ' + date;



    client.messages
        .create({
            body: body_message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919944585750'
        })
        .then(message => console.log(message.sid))
        .done()


    res.status(200).send({ message: "Notification sent successfully!!" });


})

module.exports = router;