# 💬 chat-app-sequelize-socketio - Node.js, Express.js, MySQL, Sequelize, and Socket.io

This is a real-time chat application built with 🟢 Node.js, 🌐 Express.js, 🐬 MySQL, 🛠 Sequelize ORM, and 🔌 Socket.io. The app allows users to send and receive messages in real time. It features 🔐 user authentication, 📩 one-on-one chat functionality, and 🗄 message history stored in a MySQL database.

## ⭐ Features
- **💬 Real-time Messaging**: Using 🔌 Socket.io for instant communication.
- **🔐 User Authentication**: Register, login, and 🔑 JWT token-based authentication.
- **🗄 Database**: MySQL with 🛠 Sequelize ORM to store user data and messages.
- **📩 One-on-One Chat**: Users can send messages to specific recipients.
- **🕒 Message History**: Stored in the database, fetchable for each user.
- **🌍 CORS Support**: Configured for client-server communication.

## 🛠 Technologies Used
- **🟢 Node.js**: JavaScript runtime environment for the server-side code.
- **🌐 Express.js**: Web framework for handling HTTP requests.
- **🔌 Socket.io**: Real-time, bi-directional communication between clients and the server.
- **🐬 MySQL**: Relational database to store users and messages.
- **🛠 Sequelize ORM**: ORM for MySQL database interaction.
- **🔑 JWT (JSON Web Token)**: For user authentication and authorization.

## 🚀 Getting Started

Follow these steps to set up and run the chat application.

### 1️⃣ 📥 Clone the Repository
```sh
git clone <repository_url>
cd chat-app-sequelize-socketio
```

### 2️⃣ 🏗 Install Dependencies
```sh
npm install
```

### 3️⃣ ⚙ Configure Environment Variables
Create a `.env` file and add necessary configuration values such as database credentials and JWT secret.

### 4️⃣ ▶ Run the Application
```sh
npm start
```
The server will start on the specified port and be ready to use.
