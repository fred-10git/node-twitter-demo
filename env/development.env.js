const path = require('path');

module.exports = {
  databaseUrl: "mongodb+srv://10git:123@cluster0.s465p.mongodb.net/twitter?retryWrites=true&w=majority",
  httpPort : 80,
  httpsPort : 443,
  cert: path.join(__dirname, "../ssl/local.crt"),
  key: path.join(__dirname, "../ssl/local.key"),
  passPhrase : '1234'
};
