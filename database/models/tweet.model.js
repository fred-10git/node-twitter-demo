const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema(
  {
    content: {
      type: String,
      required: [true, "Message obligatoire"],
      minlength: [2, "Message trop court"],
      maxlength: [280, "Message trop long"],
    },
    author: { type: schema.Types.ObjectId, ref: 'user', required: true }
  },
  {
    timestamps: true,
  },
);

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
