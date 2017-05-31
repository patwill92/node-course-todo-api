const {MongoClient, ObjectID} = require('mongodb'); // identical to code above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find().toArray().then((docs) => { // prints an array of objects from todos collection
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("unable to fetch todos");
  // });
  // db.collection('Todos').find({completed: true}).toArray().then((docs) => { // prints an array of objects from todos collection with completed property === false
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("unable to fetch todos");
  // });
  // db.collection('Todos').find({
  //   _id: new ObjectID('592de2fdeb28e50408e5a7cc')
  // }).toArray().then((docs) => { // prints an array of objects from todos collection by object ID
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("unable to fetch todos");
  // });
  //
  // db.collection('Todos').find().count().then((count) => { // prints number of documents in Todos collection
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log("unable to fetch todos");
  // });

  db.collection('Users').find({name: 'Patrick'}).toArray().then((docs) => { // prints number of documents in Todos collection
    console.log(docs);
  }, (err) => {
    console.log("unable to fetch todos");
  });

  // db.close();
});
