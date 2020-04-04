const express = require('express');

const app = express();

const path = require('path');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/expresscomdb');
let db = mongoose.connection;

db.once('open', function(){
  console.log('Connected to mongodb');
})

db.on('error', function(error){
  console.log(error);
})

// Bring model
let communications = require('./models/communications');

// Load Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.get('/', function(req, res){
  communications.find({}, function(err, communicationData){
if(err){
  console.log(err);
}
else{
    console.log(communicationData);
  }
    res.render('index',{
      pageTitle:'Communication',
      communicationData: communicationData
    });
  });

});

app.get('/com/add', function(req, res){
  res.render('add_com',{
    pagetitle:'Add Communication',
  });
});


app.listen(3000, function(){
  console.log('Server started on port 3000');
})
