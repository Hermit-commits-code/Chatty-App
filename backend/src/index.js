// Importing the authentication routes from the auth.route.js file
import authRoutes from './routes/auth.route.js';
// Importing the connectDB function from the db.js file to establish a connection to the database
import { connectDB } from './lib/db.js';
// Importing the dotenv library to load environment variables from a .env file
import dotenv from 'dotenv';
// Importing the Express library, which is used to create a web server in Node.js
import express from 'express';

// Configuring dotenv to load environment variables from a .env file
dotenv.config();
// Creating an instance of an Express application
const app = express();

// Setting the port to either the environment variable PORT or 5001
const PORT = process.env.PORT || 5001;
app.use('/api/auth', authRoutes);

// Starting the server and making it listen on port 5001
// The callback function runs when the server starts successfully
app.listen(PORT, () => {
  console.log('Server is running on Port:' + PORT); // Logs a message to the console to confirm the server is running
  connectDB(); // Calls the connectDB function to establish a connection to the database
});
