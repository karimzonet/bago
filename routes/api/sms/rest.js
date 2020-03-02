const Request = require('request');

// Constructor
function Rest(content, to) {
  // always initialize all instance properties
    this.content = content; // message you are sending
    this.to = to; // phone number

}
// class methods
Rest.prototype.sendMessage = function(content, to) {
    // set options array
const  { USERNAME_SMS, PASSWORD_SMS} = process.env;
    var sender='BAGO';
    var dlr="http://smsapi.mycomafrica.com";
    content = JSON.stringify(content);
    to = JSON.stringify(to);
    var  apiKey = 'Basic ' + new Buffer(USERNAME_SMS+ ':' +PASSWORD_SMS).toString('base64');
    var options = {
      method: 'POST',
      url:'https://smsapi.mycomafrica.com/queues/infobip/messages/ ',
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
        'Accept': 'application/json'
      },
      body: '{"from":' +sender+', "to": '+to +', "dlr": '+dlr +', "message": '+content+'}'
    }
    // send the request
    Request(options, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
};
// export the class
module.exports = Rest;
