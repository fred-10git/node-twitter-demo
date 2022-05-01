const router = require('express').Router();
const tweetsHttp = require("./tweets.routes");
const usersHttp = require("./users.routes");
const authHttp = require("./auth.routes");
const { ensureAuthenticated } = require('../config/guards.config');

router.use("/tweets", ensureAuthenticated, tweetsHttp);
router.use("/users", usersHttp);
router.use("/auth", authHttp);

router.get('/', (q, r) => {
  r.redirect('/tweets');
})

module.exports = router;