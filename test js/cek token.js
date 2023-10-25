var request = require('request');

var client_id = 'd4f01a3e028449c691f3af67b3a58ae4';
var client_secret = 'bfa51632ded64735a8f19cb8d0e2c1c2';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    console.log('Access Token:', token);

    // You can use the `token` here for your API requests.
  } else {
    console.error('Error obtaining access token:', error);
  }
});
