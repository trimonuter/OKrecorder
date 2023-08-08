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
        // db.collections().then((v) => {
        //     const promises = []
        //     for(const c of v){
        //         promises.push(c.find().toArray())
        //     }
        //     Promise.all(promises).then(v => {
        //         console.log(v.flat())
        //     })
        // })
    }
})

// Routes
// app.get('/loadTopics', (req, res) => {
//     db.listCollections()
//         .toArray()
//         .then(collections => collections.map(col => col.name))
//         .then(list => res.json(list));
// })

// app.get('/allNotes', (req, res) => {
//     const colName = req.query.name;
//     db.listCollections()
//         .toArray()
//         .then(() => {
//             res.status(200).json();
//         })
//         .catch(() => {
//             res.status(500).json({error: 'Could not send bool data'})
//         })
// })


// app.get('/createCollection', (req, res) => {
//     const colName = req.query.name;
//     db.createCollection(colName)
//         .then(() => {
//             console.log('Successfully created collection');
//         })
//         .catch(() => {
//             console.log('Failed to create database')
//         })
// })

app.get('/notes', (req, res) => {
    db.collection('notes')
        .find({
            value: req.query.branch
        })
        .toArray()
        .then(data => {
            res.status(200).json(data);
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

app.get('/topics', (req, res) => {
    try {
        db.collection('topics')
            .find()
            .toArray()
            .then(data => {res.status(200).json(data)})
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error saving data to MongoDB'
        })
    }
})

app.post('/topics', (req, res) => {
    const data = req.body
    db.collection('topics')
        .insertOne({
            'topicName': data.topicName
        })

res.json({message: 'Data saved successfully'});
})