'use strict';

exports.port = process.env.PORT || 3123;
exports.domain = "localhost:" + exports.port;
exports.scheme = "http";
exports.origin = exports.scheme + "://" + exports.domain;
