const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/getThatJob-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
  .then(db=>console.log('Mongo is connected'))
  .catch(err => console.log(err));