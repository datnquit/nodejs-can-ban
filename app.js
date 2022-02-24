const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const fsExtra = require('fs-extra');
const expressLayouts = require('express-ejs-layouts');
 
require('dotenv').config();
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.xmenu = [
        {
            label: 'home',
            link: '/'
        },
        {
            label: 'datnq',
            link: 'https://nqdat.com'
        }
    ];
    next();
});


app.set('view engine', 'ejs')
app.set('views', 'views');
app.set('layout', './master');

app.use(require('./routes/router').router);

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let path = 'uploads';
        if (!fsExtra.existsSync(path)) {
            fsExtra.mkdirSync(path)
        }
        
        cb(null, path)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

var upload = multer({ storage: storage })
  
app.get('/form/upload', function(req, res) {
    res.sendFile(__dirname + '/form.html');
});
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)
})
  
//Uploading multiple files
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(files)
  })
//Uploading multiple files
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(files)
})

app.get('/test', function(req, res) {
    res.render('index', {
        name: 'Quang Dat',
        age: 23,
        // xmenu: [
        //     {
        //         label: 'home',
        //         link: '/'
        //     },
        //     {
        //         label: 'datnq',
        //         link: 'https://nqdat.com'
        //     }
        // ]
    });
});
    

app.listen(process.env.PORT, function() {
    console.log('server running: http://localhost:' + process.env.PORT);
});
