const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err;

  var db = client.db('shopping');

  db.collection('products').insertOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log(result.name);
    client.close();
  });
}); 
