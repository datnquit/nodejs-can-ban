const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', 'views')
app.set('layout', './master')


require("./routes/router")(app);

app.listen(process.env.PORT, function() {
    console.log('server running: http://localhost:' + process.env.PORT);
});
