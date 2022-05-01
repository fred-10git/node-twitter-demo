
exports.ensureAuthenticated = (q,r,next) => {
    if ( q.isAuthenticated() ) {
        next()
    } else {
        r.redirect('/auth/login')
    }
}