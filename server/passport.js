const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./model/UserModel');
require('dotenv').config()

passport.use(
	new GoogleStrategy(
		{
      clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

// Middleware function to handle Google sign in

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

const authenticate = passport.authenticate('local', { session: true });
module.exports = { authenticate };