const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/forumWebsite')
            .then((client) => {
                dbConnection = client.db();
                return cb();
            })
            .catch(err => {
                console.log(err);
                return cb(err);
            })
    },
    getDb: () => dbConnection
}