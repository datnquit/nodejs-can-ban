const express = require('express');
const app = express();
require('dotenv').config();

app.use(require('./routes/router').router);

app.listen(process.env.PORT, function() {
    console.log('server running: http://localhost:' + process.env.PORT);
});
