// Importing the Express library, which is used to create a web server in Node.js
import express from 'express';

// Creating an instance of an Express application
const app = express();

// Starting the server and making it listen on port 5001
// The callback function runs when the server starts successfully
app.listen(5001, () => {
  console.log('Server is running on port 5001'); // Logs a message to the console to confirm the server is running
});
