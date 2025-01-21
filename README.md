# chat-app-sequelize-socketio - Node.js, Express.js, MySQL, Sequelize, and Socket.io

This is a real-time chat application built with Node.js, Express.js, MySQL, Sequelize ORM, and Socket.io. The app allows users to send and receive messages in real time. It features user authentication, one-on-one chat functionality, and message history stored in a MySQL database.

## Features
- **Real-time Messaging**: Using Socket.io for real-time communication.
- **User Authentication**: Register, login, and JWT token-based authentication.
- **Database**: MySQL with Sequelize ORM to store user data and messages.
- **One-on-One Chat**: Users can send messages to specific recipients.
- **Message History**: Stored in the database, fetchable for each user.
- **CORS Support**: Configured for client-server communication.

## Technologies Used
- **Node.js**: JavaScript runtime environment for the server-side code.
- **Express.js**: Web framework for Node.js to handle HTTP requests.
- **Socket.io**: Real-time, bi-directional communication between clients and the server.
- **MySQL**: Relational database to store users and messages.
- **Sequelize ORM**: ORM for MySQL database interaction.
- **JWT (JSON Web Token)**: For user authentication and authorization.