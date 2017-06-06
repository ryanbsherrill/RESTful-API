const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const testUsers = [{
  _id: userOneId,
  email: 'ryan@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
},{
  _id: userTwoId,
  email: 'john@example.com',
  password: 'userTwoPass'
}];

// TEST DATA
let testTodos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}, {
  _id: new ObjectID(),
  text: 'Third test todo'
}];

// SEED DATA
const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(testTodos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    let userOne = new User(testUsers[0]).save();
    let userTwo = new User(testUsers[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {testTodos, populateTodos, testUsers, populateUsers};
