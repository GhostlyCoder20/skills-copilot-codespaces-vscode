// Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./db');
const comments = require('./routes/comments');
const posts = require('./routes/posts');
const users = require('./routes/users');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/comments', comments);
app.use('/posts', posts);
app.use('/users', users);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

