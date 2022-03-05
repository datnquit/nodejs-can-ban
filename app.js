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

app.use((req, res, next) => {
    res.locals.masterMenu = {
        headerMenu: [
          {
            label: 'home',
            link: '/',
          },
          {
            label: 'datnq',
            link: 'https://nqdat.com'
          },
          {
            label: 'newnet',
            link: 'https://newnet.vn',
          },
        ],
        footerMenu: [
          {
            label: 'home',
            link: '/',
          },
          {
            label: 'datnq',
            link: 'https://nqdat.com'
          },
        ]
    };
    next();
})


require("./routes/router")(app);

app.listen(process.env.PORT, function() {
    console.log('server running: http://localhost:' + process.env.PORT);
});
