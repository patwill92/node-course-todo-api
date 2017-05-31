const {MongoClient, ObjectID} = require('mongodb'); // identical to code above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to mongodb server');

  // findOneAndUpdate: updates document and returns value
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('592eef0ad0f3f34ec6937d63')
  // }, {
  //   $set: { //mongodb update operator
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('592ed273da40af35a43895ba')
  }, {
    $set: {
      name: 'Patrick'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
