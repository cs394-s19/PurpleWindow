var https = require('https');
function httpGet() {
  return new Promise(((resolve, reject) => {
    var options = {
        host: 'l37xvrwkw7.execute-api.us-east-1.amazonaws.com',
        port: 443,
        path: '/default/afc-Lambda?timestamp=2019-05-14-16-22-36',
        method: 'GET',
    };
    
    const request = https.request(options, (response) => {
      response.setEncoding('utf8');
      let returnData = '';

      response.on('data', (chunk) => {
        returnData += chunk;
      });

      response.on('end', () => {
        resolve(JSON.parse(returnData));
      });

      response.on('error', (error) => {
        reject(error);
      });
    });
    request.end();
  }));
}

const response = httpGet();
console.log(response);