require('./config/envValidator'); // 👈 Valida antes de levantar Express
const passport = require('passport');
require('./config/passport')(passport);

app.use(passport.initialize());