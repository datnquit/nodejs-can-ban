
exports.getIndex = (req, res) => {
  console.log(res.locals.masterMenu);
  res.render('index.ejs', {
    name: 'Nguyen quang Dat',
    age: 23,
  
  });
}

exports.showForm = (req, res) => {
    res.render('form');
}

exports.showView = (req, res) => {
  res.render('view', {layout: false});
}

exports.uploadFile = (req, res) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)
}

exports.uploadMultiple = (req, res) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(files)
}