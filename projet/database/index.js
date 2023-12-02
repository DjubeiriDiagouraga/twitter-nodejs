const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alex:qwe@cluster0.gej1yqe.mongodb.net/Twitter?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clientPromise = new Promise((resolve, reject) => {
  mongoose.connection.once('open', () => {
    resolve(mongoose);
  });
  mongoose.connection.on('error', (error) => {
    reject(error);
  });
});

console.log('connected db');

module.exports = { clientPromise };