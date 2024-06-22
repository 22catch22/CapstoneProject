const express = require ('express');
const Router = express.Router();
const dotenc = require ('dotenv').config();
const cors = require('cors');
const {createProfile, loginProfile, getUser, postNotes, getNotes} = require('../Controllers') 

Router.use 
(
cors({
credentials:true,
origin: 'http://localhost:5173'
})
)
Router.get('/');
Router.get('/users', getUser);
Router.get('/Notes', getNotes)
Router.post('/CreateProfile', createProfile);
Router.post('/loginprofile', loginProfile);
Router.post('/postnotes', postNotes);

module.exports  = Router