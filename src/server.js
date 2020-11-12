const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/contact-management-app'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/contact-management-app/index.html'));
});

ngApp.listen(process.env.PORT || 8080);