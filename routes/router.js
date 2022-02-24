module.exports = app => {
    require("./admin")(app);
    require("./web")(app);
}

// router.use('/admin', require('./admin').routerAdmin);
// router.use(require('./web').routerWeb);
