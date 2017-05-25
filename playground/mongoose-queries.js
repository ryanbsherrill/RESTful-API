const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo
let id = '59267bef76ee3e04ae7798e9';

if (!ObjectID.isValid(id)) {
  console.log('Invalid ID');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos:', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo:', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found');
  }
  console.log('Todo By ID:', todo);
}).catch((e) => console.log(e));

// User
User.findById('59265b763b5cfc0312817a2d').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User:', JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
