const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
const emails = 'whitesox3734@gmail.com'

passport.use(new GoogleStrategy({
    clientID: '904767707900-9vgh5ltf8gbhfpfiqhtcueu5nfpd7i9u.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://app-p2.herokuapp.com/google/callback"
  },
 function(accessToken, refreshToken, profile, done){
 	return done(null, profile);
 	}
 ));



