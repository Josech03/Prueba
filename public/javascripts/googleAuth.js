const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
passport.use(new GoogleStrategy({
    clientID: '904767707900-9vgh5ltf8gbhfpfiqhtcueu5nfpd7i9u.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://app-p2.herokuapp.com/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));