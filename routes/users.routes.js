const router = require("express").Router();
const { signup, signupForm, updateImage } = require("../controllers/users.controller");
const { ensureAuthenticated } = require("../config/guards.config");

router.get("/signup", signupForm);
router.post("/signup", signup);
router.post("/image", ensureAuthenticated, updateImage);

module.exports = router;

