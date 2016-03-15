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
    collection.find().toArray(function(err, docs) {
      db.close();
      res.json(docs);
    });
    // collection.insert([{
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiiwKqiz8HLAhWknIMKHfAmC1sQjBwIBA&url=http%3A%2F%2Fwww.tidesinn.com%2Fwp-content%2Fuploads%2F2015%2F02%2Fbeer-mug.png&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiX2YK3z8HLAhWHrYMKHav4ClkQjBwIBA&url=http%3A%2F%2Fwww.thebostoncalendar.com%2Fsystem%2Fevents%2Fphotos%2F000%2F039%2F390%2Foriginal%2Fo-JUST-ADD-WATER-BEER-facebook.jpg%3F1444024062&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj3w8TEz8HLAhXokIMKHWjFDIIQjBwIBA&url=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F5670222e57eb8dee50c74e19%2F567036650e4c117c7c6a80b5%2F5670368a2399a3b449ffc52c%2F1450194573058%2Fbeer.jpg%3Fformat%3D2500w&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj0__DXz8HLAhULt4MKHQYfDUgQjBwIBA&url=http%3A%2F%2Ffeelgrafix.com%2Fdata_images%2Fout%2F28%2F977588-beer.jpg&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjguJrkz8HLAhXKm4MKHXp5CkEQjBwIBA&url=http%3A%2F%2Fcdn.funcheap.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fo-PINT-GLASS-BEER-facebook1.jpg&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjXsYDtz8HLAhXovoMKHYG9A1gQjBwIBA&url=http%3A%2F%2Fwww.justinapexfitness.com%2Fbeer_10.jpg&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"}, {url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjY0ZyC0MHLAhXCnIMKHZHwD0gQjBwIBA&url=http%3A%2F%2Fdavisbeerweek.com%2Fwp-content%2Fuploads%2F2014%2F03%2FCraft-Beer.jpeg&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiFq86O0MHLAhVIg4MKHWzdCIkQjBwIBA&url=http%3A%2F%2Fwww.paphosbeerfestival.com%2Fassets%2Fimages%2Fbg_beer.jpg&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwir2Km90MHLAhVFmYMKHT9KBwEQjBwIBA&url=http%3A%2F%2Fwww.edgewoodyachtclub.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fbeer.gif&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiX_pOf0cHLAhUplYMKHZQVA_cQjBwIBA&url=http%3A%2F%2Fwww.beer100.com%2Fimages%2Fbeermug.jpg&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }, {
    //   url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjMgviv0cHLAhVlu4MKHay7D2UQjBwIBA&url=http%3A%2F%2Fpngimg.com%2Fupload%2Fbeer_PNG2346.png&psig=AFQjCNG67HE9Jfl5vQL8izh4a9djn37wsA&ust=1458094425737896"
    // }], function(err, result) {
    //   collection.find().toArray(function(err, docs) {
    //     db.close();
    //     res.json(docs);
    //   });
    });
  });
});

module.exports = router;
