const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv/config');
const cors=require('cors');


const app = express();




const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());


// routes
const routes = require('../backend/routes/route.js');


//connection to database
mongoose
.connect(process.env.MONGOURL)
.then(()=> console.log("connected to database"))
.catch(err=> console.log("err"))

app.use('/',routes)

//listen on port
app.listen(PORT,()=>console.log(`listening on ${PORT}`));