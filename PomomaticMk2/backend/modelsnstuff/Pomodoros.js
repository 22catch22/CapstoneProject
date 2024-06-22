const mongoose = require('mongoose');
const Schema = mongoose;

const  PomoSchema= new Schema({

    Name: String,
    Time: Number
})

const PomoModel = mongoose.model('Pomos', PomoSchema);

module.exports = PomoModel;