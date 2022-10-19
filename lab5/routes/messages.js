var express = require('express');
var router = express.Router();
const MessageController = require('../controllers/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Siens message API' });
});

/* GET messages. */
router.get('/messages', MessageController.getAll);

/* GET messages by id */
router.get('/messages/{:id}', MessageController.getMessageById);

/* POST create a new message. */
router.post('/messages', MessageController.createMessage);



module.exports = router;
