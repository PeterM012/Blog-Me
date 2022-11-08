const router = require('express').Router();
const apiRoutes = require('./api');
const home = require('./home');
const dashboard = require('./home-dashboard');


router.use('/api', apiRoutes);
router.use('/dashboard', dashboard);
router.use('/', home);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;