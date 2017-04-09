var https = require('https');

console.log('I did it!');


var options = {
  host: 'www.example.org',
  path: '/'
}


var callBack = function() {
  console.log('In response handler callback!');
}

console.log("im about to make the request");


https.request(options, callBack).end();

console.log("ive made the request");
