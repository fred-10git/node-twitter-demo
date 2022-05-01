const router = require("express").Router();
const { loginForm, login, logout } = require("../controllers/auth.controller");

router.get("/login", loginForm);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
