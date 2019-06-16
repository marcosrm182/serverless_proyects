'use strict';
const queryString = require('querystring');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hola ${event.pathParameters.name}`,
      input: event.name,
    }),
  }; 
};

module.exports.showUser = async (event, context) => {
  const body = queryString.parse(event['body']);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Petición POST`,
      input: `Hola ${body.name} ${body.lastname}`,
    }),
  };
};