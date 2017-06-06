const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

// hashing
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

let hashedPassword = '$2a$10$CW34Vao4cQgBD/BoQ7VMFO1gtz0gRsn0nOjGelEpTXpcjSr3pqNNy';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

/**

When logging in a user:
- fetch the hashed value from the db
- compare to the plain-text password the user has given
- use res variable to determine whether or not the password was correct

*/





// let data = {
//   id: 10
// };
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
//
// let decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);
//
// // let message = 'I am user number 1';
// // let hash = SHA256(message).toString();
// //
// // console.log(`Message: ${message}`);
// // console.log(`Hash: ${hash}`);
//
// // let data = {
// //   id: 4,
// // };
// //
// // let token = {
// //   data,
// //   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// // };
// //
// // // token.data.id = 5;
// // // token.hash = SHA256(JSON.stringify(token.data)).toString();
// //
// // let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// //
// // if (resultHash === token.hash) {
// //   console.log('Data was not changed');
// // } else {
// //   console.log('Data was changed. Do not trust!');
// // }
