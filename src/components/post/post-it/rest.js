const Request = require('request');

// Constructor
function Rest() {


}
// class methods
Rest.prototype.sendMessage = function() {
    // set options array

    var options = {
      method: 'POST',
      url:'http://www.dneonline.com/calculator.asmx?wsdl',
      headers:
      {
        'Content-Type': 'text/xml',
        'Accept': 'text/xml'
      },
      body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">'+
   '<soapenv:Header/>'+
   '<soapenv:Body>'+
      '<tem:Add>'+
         '<tem:intA>10</tem:intA>'+
         '<tem:intB>2</tem:intB>'+
      '</tem:Add>'+
   '</soapenv:Body>'+
'</soapenv:Envelope>'
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
