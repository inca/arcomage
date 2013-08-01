'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/arcomage');

exports.mongoose = mongoose;
