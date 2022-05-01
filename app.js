const express = require("express");
const path = require("path");
const morgan = require("morgan");
const http = require("./routes");
const errorHandler = require("errorhandler");
const res = require("express/lib/response");
require("./database");

const app = express();
module.exports = app;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

require("./config/session.config");
require("./config/passport.config");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(http);

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler);
} else {
  app.use((err, q, r, next) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code || 500,
      message: code === 500 ? "Server Error" : err.message,
    });
  });
}
