const crypto = require('crypto');

const accessTokenSecret = crypto.randomBytes(64).toString('hex');
console.log(accessTokenSecret);
