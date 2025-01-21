const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

const userSockets = {};
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('join_room', (userId) => {
        userSockets[userId] = socket.id;
        console.log(`User ${userId} joined room with socket id: ${socket.id}`);
    });

    socket.on('send_message', (message) => {
        const { senderId, receiverId, content } = message;
        console.log('New message received:', message);
        if (userSockets[receiverId]) {
            io.to(userSockets[receiverId]).emit('receive_message', message);
        } else {
            console.log('Receiver not online');
        }
    });
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
