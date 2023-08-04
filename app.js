const express = require('express');
const { connectToDB, getDb } = require('./data')
const cors = require('cors');


// Middleware
const app = express();
app.use(express.json());

app.use(cors());

// Database Connection
let db;

connectToDB((err) => {
    if (!err) {
        // Start server
        app.listen(3000, () => {
            console.log('App listening on port 3000');
        })
        db = getDb();
    }
})

// Routes
app.get('/notes', (req, res) => {
    let allNotes = [];
    
    db.collection('notes')
        .find()
        .forEach(note => allNotes.push(note))
        .then(() => {
            res.status(200).json(allNotes);
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch documents'})
        })
});

app.post('/notes', (req, res) => {
    const data = req.body

    try {
        db.collection('notes')
            .insertOne({
                "user": data.user,
                "text": data.text
            })
    
        res.json({message: 'Data saved successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error saving data to MongoDB'
        })
    }
});