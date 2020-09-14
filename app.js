const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//Middleware 
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const medsRoute = require('./routes/meds');

app.use('/api/meds', medsRoute);

//ROUTES
app.get('/',(req, res) => { 
    res.send('We are on home APIs'); 
});


//How to start listening to the server

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));





