const express = require('express');
const app = express();
const session           = require('express-session');

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Server Init');
    console.log('Listening on port: ', PORT);
});