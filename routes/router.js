const express = require('express');

const router = express();

router.use('/admin', require('./admin').routerAdmin);
router.use(require('./web').routerWeb);
router.use('/api/tutorials', require('./api').router);

module.exports.router = router;