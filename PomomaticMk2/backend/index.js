const express = require('express');
const dotenc = require ('dotenv').config();
const cors = require('cors')
const {test} = require('./Controllers')

 

const app = express();
app.use('/', test);

const port = 8008;
app.listen(port, () => console.log(`Server is running on '${port}'`))