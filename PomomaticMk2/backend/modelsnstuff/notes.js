const mongoose = require('mongoose')
const {Schema} = mongoose

const NoteSchema = new Schema({
Notes: String,
})
const NoteModel = mongoose.model('Notes', NoteSchema);

module.exports = NoteModel;