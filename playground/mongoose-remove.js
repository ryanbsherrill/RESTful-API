const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '592cfeceef0bc871a0b107b7'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('592cfeceef0bc871a0b107b7').then((todo) => {
  console.log(todo);
});
