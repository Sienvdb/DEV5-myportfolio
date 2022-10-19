const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id: Number,
    user: {type: String, required: true},
    message: {type: String, required: true},

});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;