const Request = require('request');

// Constructor
function Rest() {


}
// class methods
Rest.prototype.sendMessage = function() {
    // set options array

    var options = {
      method: 'POST',
      url:'https://nodeD3.test.webservices.amadeus.com/1ASIWBAGBG',
      headers:
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/xml'
      },
      body: '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'+
  '<soap:Header>'+
  '<add:MessageID xmlns:add="http://www.w3.org/2005/08/addressing">ac9e7931-c84f-6986-982e-b7ee55c4577b</add:MessageID>'+
  '<add:Action xmlns:add="http://www.w3.org/2005/08/addressing">http://webservices.amadeus.com/PNRRET_17_1_1A</add:Action>'+
  '<add:To xmlns:add="http://www.w3.org/2005/08/addressing">https://nodeD3.test.webservices.amadeus.com/1ASIWBAGBG</add:To>'+
  '<oas:Security xmlns:oas="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">'+
  '<oas:UsernameToken xmlns:oas1="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" oas1:Id="UsernameToken-1">'+
  '<oas:Username>WSBGBAG</oas:Username>'+
  '<oas:Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">Qz53LEYofTM=</oas:Nonce>'+
  '<oas:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">E67XDYverUMHneuQnMfy6y8uOAE=</oas:Password>'+
  '<oas1:Created>2019-09-05T07:32:33.756Z</oas1:Created>'+
  '</oas:UsernameToken>'+
  '</oas:Security>'+
  '<AMA_SecurityHostedUser xmlns="http://xml.amadeus.com/2010/06/Security_v1">'+
  '<UserID POS_Type="1" PseudoCityCode="DKRPF3300" AgentDutyCode="SU" RequestorType="U" />'+
  '</AMA_SecurityHostedUser>'+
  '</soap:Header>'+
  '<soap:Body>'+
  '<PNR_Retrieve>'+
  '<retrievalFacts>'+
  '<retrieve>'+
  '<type>2</type>'+
  '</retrieve>'+
  '<reservationOrProfileIdentifier>'+
  '<reservation>'+
  '<controlNumber>U4ZIUN</controlNumber>'+
  '</reservation>'+
  '</reservationOrProfileIdentifier>'+
  '</retrievalFacts>'+
  '</PNR_Retrieve>'+
  '</soap:Body>'+
  '</soap:Envelope>'
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
