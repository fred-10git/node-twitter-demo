const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { stringify } = require("nodemon/lib/utils");

const userSchema = schema(
  {
    username: { type: String, required: true, unique: true },
    local: {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true}
    },
    avatar : { type: String, default: '/images/default-profile.png' }
  },
  {
    timestamps: true,
  },
);


userSchema.statics.hashPassword = async (password) => {
  return bcrypt.hash( password, 12 );
}

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare( password, this.local.password );
}


const User = mongoose.model("user", userSchema);

module.exports = User;
