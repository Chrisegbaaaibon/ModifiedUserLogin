const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const { db } = require('./database/connection');
const  router = require('./routes/router')

const app = express();

app.use(
   cookieSession({
      name: "Ghostcod3r",
      keys: ["$/fkk@n" ],
      secret: process.env.SECRET_KEY,
      httpOnly: true
   })
)
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use( 
router
)

const PORT = 4500;

app.listen(PORT, ()=>{
   db();
   console.log("running on port 4500🚀🚀")
})