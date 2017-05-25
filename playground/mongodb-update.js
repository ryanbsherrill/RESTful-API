// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // args = (filter, updates, options, promise)

db.collection('Users').findOneAndUpdate({
  name: 'Bob'
}, {
  $set: {
    name: 'JoJo'
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

db.collection('Users').findOneAndUpdate({
  age: 31
}, {
  $inc: {
    age: 10
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59261832685e74b90a842767')
  // }, {
  //    $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
