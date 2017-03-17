/**
 * Created by dskripn1 on 2017-03-16.
 */
'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./src/config');
const setupController=require('./src/controlles/setupController');

const port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));


app.use('view engine', 'ejs');

mongoose.connect(config.getConnectionString());

setupController(app);
app.listen(port);
