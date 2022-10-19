var express = require('express');
var router = express.Router();
const MessageController = require('../controllers/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Siens message API' });
});

/* GET messages. */
router.get('/messages', MessageController.getAll);

module.exports = router;
