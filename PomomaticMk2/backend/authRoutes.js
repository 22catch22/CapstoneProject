const express = require ('express');
const Router = express.Router();
const dotenc = require ('dotenv').config();
const cors = require('cors');
const {test} = require('./Controllers') 

Router.use 
(
cors({
credentials:true,
origin: 'http://localhost:8008'
})
)
Router.get('/', test)

module.exports  = Router