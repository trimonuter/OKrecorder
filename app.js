const express = require('express');
const app = express();

// Routes
app.get('/notes', (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
})

// Start server
app.listen(3000, () => {
    console.log('App listening on port 3000');
})