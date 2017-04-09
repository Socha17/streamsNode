var https = require('https');

console.log('I did it!');


var options = {
  host: 'www.example.org',
  path: '/'
}


var callBack = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + '--]');
    console.log(chunk.toString());
  })

}

console.log("im about to make the request");
https.request(options, callBack).end();
console.log("ive made the request");
