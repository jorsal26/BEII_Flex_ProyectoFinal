const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

// 🔐 Configuración de passport (passport.use)
module.exports = (passport) => {
  passport.use(new LocalStrategy({ usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false, { message: 'Usuario no encontrado' });

        const match = await user.matchPassword(password);
        if (!match) return done(null, false, { message: 'Password incorrecto' });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));

  // 🔐 Serializar usuario (passport.serializeUser)
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // 🔐 Deserializar usuario (passport.deserializeUser)
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};
