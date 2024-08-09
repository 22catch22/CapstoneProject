const mongoose = require('mongoose')
const {Schema} = mongoose

const NoteSchema = new Schema({

text:{type:String, required: true},

})
const NoteModel = mongoose.model('Notes', NoteSchema);

module.exports = NoteModel;