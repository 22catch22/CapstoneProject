const express = require('express');
const dotenv = require ('dotenv').config();
const cors = require('cors')
const {test} = require('./Controllers')
const {mongoose} = require('mongoose');
 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log ("Database has been Connected"))
.catch((err) => console.log('Database has NOT been connected', err))
const app = express();
app.use('/', require('./Routes/authRoutes'));

const port = 5173;
app.listen(port, () => console.log(`Server is running on '${port}'`))