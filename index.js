const express = require('express');
const config = require('./config/config');
console.log(config)

const app = express();


app.listen(config.port);
console.log('yourt app is running at 3000')
