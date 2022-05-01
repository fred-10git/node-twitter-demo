const app = require("../app");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { findUserById, findUserByEmail } = require("../queries/users.queries");

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser( (user, done) => {
    done(null, user._id);
});
passport.deserializeUser( async (id, done) => {
    try {
        const user = await findUserById(id);
        done(null, user);
    } catch(err) {
        done(err);
    }
});

passport.use('local', new LocalStrategy({
    usernameField: 'email',
}, async (email, password, done) => {
    try {
        const  user = await findUserByEmail(email);
        if (user ) {
            const match = user.checkPassword(password);
            if (match) {
                done(null, user);
            } else {
                done(null, false, { message : 'Mot de passe invalide'});
            }
        } else {
            done(null, false, { message : 'Utilisateur incoonu'} );
        }

    } catch(err) {
        done(err)
    }
}
));