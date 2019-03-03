"use strict";

module.exports.index = function(event, context, callback) {
  console.log(event);

  const response = {
    statusCode: 301,
    headers: {
      Location: 'https://google.com',
    },
    body: JSON.stringify({ "message": "Hello World!" })
  };


  return  callback(null, response);
    
}