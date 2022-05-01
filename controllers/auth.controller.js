const passport = require("passport");


exports.loginForm = (q, r, next) => {
  r.render("auth/form", { errors: null, isAuth: q.isAuthenticated(), user: q.user });
 
};

exports.login = (q, r, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      next(err);
    } else if (!user) {
      r.render("auth/form", { errors: [info.message], isAuth: q.isAuthenticated(), user: q.user });
    } else {
      q.login(user, (err) => {
        if (err) { next(err) };
        r.redirect('/tweets');
      });
    }

  })(q,r,next);
};

exports.logout = (q, r, next) => {
  console.log("Logout");
  q.logout();
  r.redirect('/auth/login')
};
