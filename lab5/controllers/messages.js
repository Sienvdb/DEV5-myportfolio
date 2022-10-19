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

module.exports.getAll = getAll;