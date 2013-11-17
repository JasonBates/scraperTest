// scrape.js - Cheerio and request

var request = require('request');
var cheerio = require('cheerio');

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('td.title a').each(function(i, element){
      var a = $(element);
      console.log(i+1 + " " + a.text());

      console.log ("extra message - testing git and again");

    });
  }
});