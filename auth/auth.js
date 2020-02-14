const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;

const UserModel = require('../models/userModel');

// handle user registration
passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const { name } = req.body;
        const user = await UserModel.create({ email, password, name });
        return done(null, user);
    } catch (error) {
        done(error);
    }
}));