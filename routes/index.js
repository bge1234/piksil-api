var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var URL = process.env.MONGOLAB_URI || 'mongodb://localhost/piksil-storage';

router.get('/', function(req, res) {
  res.redirect('/api')
});

router.get('/api', function(req, res) {
  MongoClient.connect(URL, function(err, db) {
    if (err) return

    var collection = db.collection('beers');
    // collection.find().toArray(function(err, docs) {
    //   db.close();
    //   res.json(docs);
    // });
    collection.insert([{
      url: "http://www.tidesinn.com/wp-content/uploads/2015/02/beer-mug.png"
    }, {
      url: "http://www.thebostoncalendar.com/system/events/photos/000/039/390/original/o-JUST-ADD-WATER-BEER-facebook.jpg"
    }, {
      url: "http://static1.squarespace.com/static/5670222e57eb8dee50c74e19/567036650e4c117c7c6a80b5/5670368a2399a3b449ffc52c/1450194573058/beer.jpg"
    }, {
      url: "http://www.paphosbeerfestival.com/assets/images/bg_beer.jpg"
    }, {
      url: "http://discovermagazine.com/~/media/Images/Issues/2013/June/beer.jpg"
    }, {
      url: "http://cdn.funcheap.com/wp-content/uploads/2016/01/o-PINT-GLASS-BEER-facebook1.jpg"
    }, {
      url: "http://davisbeerweek.com/wp-content/uploads/2014/03/Craft-Beer.jpeg"
    }, {
      url: "http://www.justinapexfitness.com/beer_10.jpg"
    }, {
      url: "https://www.warninggear.com/wp-content/uploads/2015/08/keep-calm-and-drink-beer-435.png"
    }, {
      url: "http://www.edgewoodyachtclub.com/wp-content/uploads/2016/01/beer.gif"
    }], function(err, result) {
      collection.find().toArray(function(err, docs) {
        db.close();
        res.json(docs);
      });
    });
  });
});

module.exports = router;
