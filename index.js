const fs = require('fs')
const jwt = require('jsonwebtoken')

const privateKey = fs.readFileSync('./private.key', 'utf-8');
const publicKey = fs.readFileSync('./public.key', 'utf-8');

var payload = {};

payload.name = 'Deni',
payload.surname = 'Mircheski';
payload.admin = true
payload.iss = 'Me'
payload.sub = '3538'
payload.aud = 'http://motorcycles.com'



var exp = '1h'

var signOptions = {
    expiresIn: exp,
    algorithm: "RS256"
};

var token = jwt.sign(payload, privateKey, signOptions);
console.log('Token = ' + token);

console.log('\n')

var verified = jwt.verify(token, publicKey, signOptions)
console.log('Verified: ' + JSON.stringify(verified))

console.log('\n')
var decoded = jwt.decode(token, {complete: true});
console.log('Decoded Header: ' + JSON.stringify(decoded.header))
console.log('Decoded Payload: ' + JSON.stringify(decoded.payload))