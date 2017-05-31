// mongo client lets you connect to mongo server
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // identical to code above

// var user = {name: 'Patrick', age: 24}; // ES6 object destructuring
// var {name} = user; //ES6 object destructuring used to make new variables from an objects properties
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Patrick',
  //   age: 24,
  //   location: 'Charlotte'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
