const { createUser } = require("../queries/users.queries");
const path = require("path");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: (q, file, callback) => {
      callback(null, path.join(__dirname, "../public/images/avatars"));
    },
    filename: (q, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

exports.signupForm = (q, r, next) => {
  r.render("users/signup", { errors: null });
};

exports.signup = async (q, r, next) => {
  try {
    const user = await createUser(q.body);
    r.redirect("/");
  } catch (err) {
    console.log(err);
    r.render("/users/signup", { errors: [err.message] });
  }
};

exports.updateImage = [
  upload.single("avatar"),
  async (q, r, next) => {
    console.log("update", q.file);
    try {
      const user = q.user;
      user.avatar = `/images/avatars/${q.file.filename}`;
      await user.save();
      r.redirect("/");
    } catch (err) {
      next(err);
    }
  },
];