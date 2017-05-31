const {MongoClient, ObjectID} = require('mongodb'); // identical to code above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to mongodb server');

  // deleteMany: targets many documents to remove
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne: deletes one documents
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete: deletes one and returns that value
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('592dfccae143f535e8eab5a6')
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteMany({name: 'Patrick'}).then((result) => {
    console.log(result);
  });

  // db.close();
});
