/**
 * Created by dskripn1 on 2017-03-16.
 */
'use strict';
const express = require('express');
let app = express();
const mongoose = require('mongoose');
const config = require('./src/config');
const setupController=require('./src/controlles/setupController');
const apiControler=require('./src/controlles/apiController');
const port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.get('/', function (err,res) {
    res.send('ok');
});

app.set('view engine', 'ejs');

mongoose.connect(config.getConnectionString());

setupController(app);
apiControler(app);
app.listen(port);
