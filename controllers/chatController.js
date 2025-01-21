const { Message, User } = require('../models');

const sendMessage = async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    const senderId = req.user.id;

    if (!receiverId || !content) {
      return res.status(400).json({ message: 'Receiver and content are required.' });
    }

    const message = await Message.create({ senderId, receiverId, content });

    res.status(201).json({ message: 'Message sent successfully', data: message });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const { userId } = req.params;
    const senderId = req.user.id;

    const messages = await Message.findAll({
      where: {
        senderId: [senderId, userId],
        receiverId: [senderId, userId],
      },
      order: [['createdAt', 'ASC']],
      include: [
        {
          model: User,
          as: 'sender',
          attributes: ['fullName'],
        },
        {
          model: User,
          as: 'receiver',
          attributes: ['fullName'],
        }
      ]
    });

    const formattedMessages = messages.map(message => ({
      id: message.id,
      senderId: message.senderId,
      senderFullName: message.sender.fullName,
      receiverId: message.receiverId,
      receiverFullName: message.receiver.fullName,
      content: message.content,
      createdAt: message.createdAt,
      updatedAt: message.updatedAt
    }));

    res.status(200).json({ messages: formattedMessages });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages', error: error.message });
  }
};

const getChatUsers = async (req, res) => {
  try {
    const userId = req.user.id;

    const chatUsers = await Message.findAll({
      where: {
        senderId: userId,
      },
      attributes: ['receiverId'],
      group: ['receiverId'],
      include: [{ model: User, as: 'receiver', attributes: ['id', 'fullName', 'username'] }],
    });

    res.status(200).json({ users: chatUsers });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chat users', error: error.message });
  }
};

module.exports = {
  sendMessage,
  getMessages,
  getChatUsers,
};
