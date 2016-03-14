var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var URL = 'mongodb://localhost/piksil-storage';

router.get('/api', function(req, res) {
  MongoClient.connect(URL, function(err, db) {
    if (err) return

    var collection = db.collection('foods');
    collection.insert([{name: 'taco', tasty: true}, {name: 'taco2', tasty: false}], function(err, result) {
      collection.find().toArray(function(err, docs) {
        db.close();
        res.json(docs);
      });
    });
  });
});

module.exports = router;
