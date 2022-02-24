
exports.getIndex = (req, res) => {
    res.send('hello user');
}

exports.showForm = (req, res) => {
    res.render('form');
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