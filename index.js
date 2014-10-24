'use strict';
var querystring = require('querystring');

var request = require('request');

var api = 'https://openapi.youku.com/v2/searches/video/by_keyword.json';

module.exports = exports.searchYouku = function (options, callback) {
    if (Object.prototype.toString.call(options.keywords) === '[object Array]') {
        options.keyword = options.keywords.reduce(function(memo, curr) {
            return memo + ' ' + curr;
        }, '');
    }

    request(api + '?' + querystring.stringify(options), function(err, res, body) {
        if (err) {
            callback(err);
        }

        callback(null, body);
    });
};
