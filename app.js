const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


require("./routes/router")(app);

app.listen(process.env.PORT, function() {
    console.log('server running: http://localhost:' + process.env.PORT);
});
