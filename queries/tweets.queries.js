const Tweet = require("../database/models/tweet.model");

exports.getTweets = () => {
  return Tweet.find({}).exec();
};

exports.getTweet = (tweetId) => {
  return Tweet.findById(tweetId).exec();
};

exports.createTweet = (message) => {
  const newTweet = new Tweet(message);
  return newTweet.save();
};

exports.deleteTweet = (tweetId) => {
  return Tweet.findByIdAndDelete(tweetId).exec();
};
exports.updateTweet = (tweetId, tweet) => {
  return Tweet.findByIdAndUpdate(tweetId, { $set: tweet }, { runValidators: true}).exec();
};
