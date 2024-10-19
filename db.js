const mongoose = require('mongoose');

const mongooseUri = process.env.MONGO_URL; // Local MongoDB URI
const mongoosrUriAtlas = process.env.MONGO_URL_ATLAS; // MongoDB Atlas URI

// Connect to MongoDB Atlas
mongoose.connect(mongoosrUriAtlas, {
    useNewUrlParser: true,     
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Event listeners for connection  states
db.on('connected', () => {
    console.log('Connection established:', db.host);
});

db.on('error', (error) => {
    console.error('There is some error with the connection:', error);
});

db.on('disconnected', () => {
    console.log('The connection is disconnected'); 
});
       
// Export the connection  
module.exports = db;
 