var express = require('express'),
  pug = require('pug'),
  path = require('path'),
  route = require('./routes/routes.js'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');


mongoose.connect("mongodb://admin:Neukeadus44@ds029705.mlab.com:29705/capstone-services")
var app = express();
app.post(path, (req, res) => {
  const stripe_version = req.query.api_version;
  if (!stripe_version) {
    res.status(400).end();
    return;
  }
  // This function assumes that some previous middleware has determined the
  // correct customerId for the session and saved it on the request object.
  stripe.ephemeralKeys.create(
    {customer: req.customerId},
    {stripe_version: stripe_version}
  ).then((key) => {
    res.status(200).json(key);
  }).catch((err) => {
    res.status(500).end();
  });
});



//app.set('view engine', 'pug');
//app.set('views', __dirname + '/views');
//
//app.use(express.static(path.join(__dirname + '/public')));
//
//var urlencodedParser = bodyParser.urlencoded({
//  extended: true
//})
//
//app.get('/', route.index);
//app.get('/create', route.create);
//app.get('/edit/:id', route.edit);
//app.get('/details/:id', route.details);
//app.post('/create', urlencodedParser, route.createPerson);
//app.post('/edit/:id', urlencodedParser, route.editPerson);
//app.get('/delete/:id', route.delete);

app.listen(3000);
