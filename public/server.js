// server.js
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
const url = 'mongodb+srv://roniasunny2003:<ariyilla>@cluster0.gixqnqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'tourism_website';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err);
    
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    
    // Routes
    app.post('/login', (req, res) => {
        const { email, password } = req.body;
        // Check email and password against database
        // If valid, authenticate user
        // Otherwise, send error response
    });

    app.post('/signup', (req, res) => {
        const { name, email, password } = req.body;
        // Store user information in MongoDB
        // Handle validation and error cases
    });

    app.post('/reset-password', (req, res) => {
        const { email } = req.body;
        // Generate reset password token, send email, and update database
        // Handle validation and error cases
    });

    app.listen(port, () => console.log(`Server running on port ${port}`));
});
