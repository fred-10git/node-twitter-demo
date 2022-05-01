const app = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { mongoosePromise } = require("../database");

app.use(
  session({
    secret: "Secret phrase to use",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
    store: MongoStore.create({
      clientPromise: mongoosePromise.then((m) => { 
          console.log("Connexion Atlas OK !");
          return m.connection.getClient(); 
        }),
      ttl: 60 * 60 * 24 * 14,
    }),
  }),
);