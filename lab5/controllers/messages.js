// require models
const Message = require("../models/message");

const getAll = (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) { 
            console.log(err)
            let response = {
                status: "error",
                message: "Error creating topping"
            }
            res.json(response);
        }
        let response = {
            status: "success",
            message: "GETTING messages",
            data: messages
        }
        res.json(response);
    });
};

const getMessageById = (req, res) => {
    message.findById(req.params.id, (err, message) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "Error getting this message"
                }
                res.json(response);
            }
            let response = {
                status: "success",
                message: "GETTING messages" + req.params.id,
                data: messages.find(message => message.id === req.params.id)
            }
            res.json(response);
            }
            )};

const createMessage = (req, res) => {
    let sender = req.body.user;
    let message = req.body.message;

    let newMessage = new Message(req.body);
    newMessage.sender = sender;
    newMessage.message = message;
    newMessage.save((err, message) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "Error creating message"
                }
                res.json(response);
            }
            let response = {
                status: "success",
                message: "Message created",
                data: message
             }
            res.json(response);
            });
        };

module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;
module.exports.createMessage = createMessage;