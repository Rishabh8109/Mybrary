const mongoose = require('mongoose');

mongoose.connect( "mongodb://localhost:27017/Mybrary", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error' ,error => console.log(error));
db.once('open' , () => console.log('conncted to mongoose'));

var booksSchema = new mongoose.Schema({
  name : {
      type : String,
      require: true
  }
});

var booksModel = mongoose.model('books' , booksSchema);
module.exports = booksModel;