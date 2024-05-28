const express = require ('express');
const Router = express.Router();
const dotenc = require ('dotenv').config();
const cors = require('cors');
const {test, CreateProfile} = require('../Controllers') 

Router.use 
(
cors({
credentials:true,
origin: 'http://localhost:5173'
})
)
Router.get('/', test)
Router.get('./LoginForm')
Router.get('/CreateProfilePage')
Router.post('/CreateProfilePage', CreateProfile)
module.exports  = Router