const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/books', { useNewUrlParser: true, });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);
    throw new Error(error);
});
db.once('open', () => console.log('Connected to mongodb'));

module.exports = db;