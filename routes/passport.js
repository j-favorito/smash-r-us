const passportRouter = require("express").Router();
const passport = require("../oAuthConfig/passport");
// const User = require("userModel");

passportRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
);

passportRouter.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect("http://localhost:3000/home");
    }
);

module.exports = passportRouter;