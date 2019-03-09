const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/bookstore';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`[MongoDb] Connected at ${url}`));