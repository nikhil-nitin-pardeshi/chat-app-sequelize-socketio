const express = require('express');
const { sendMessage, getMessages, getChatUsers } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/send', authMiddleware, sendMessage);
router.get('/messages/:userId', authMiddleware, getMessages);
router.get('/users', authMiddleware, getChatUsers);

module.exports = router;
