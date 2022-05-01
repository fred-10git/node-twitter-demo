const res = require("express/lib/response");
const { getTweet, getTweets, createTweet, updateTweet, deleteTweet } = require("../queries/tweets.queries");

exports.tweetList = async (q, r, next) => {
  try {
    const tweets = await getTweets();
    r.render("tweets/", { tweets , isAuth: q.isAuthenticated(), user: q.user });
  } catch (err) {
    next(err);
  }
};

exports.tweetNew = (q, r, next) => {
  r.render("tweets/form", { tweet: {}, isAuth: q.isAuthenticated(), user: q.user });
};

exports.tweetCreate = async (q, r, next) => {
  try {
    const body = q.body;
    await createTweet( {...body, author: q.user._id } );
    r.redirect("/tweets");
  } catch (err) {
    const errors = Object.keys(err.errors).map((key) => err.errors[key].message);
    r.status(400).render("tweets/form", { errors, isAuth: q.isAuthenticated(), user: q.user  });
    //next(err);
  }
};

exports.tweetDelete = async (q, r, next) => {
  try {
    const tweetId = q.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getTweets();
    r.render("tweets/tweets", { tweets });
  } catch (err) {
    next(err);
  }
};

exports.tweetEdit = async (q, r, next) => {
  try {
    const tweetId = q.params.tweetId;
    const tweet = await getTweet(tweetId);
    r.render("tweets/form", { tweet, isAuth: q.isAuthenticated(), user: q.user });
  } catch (err) {
    next(err);
  }
};

exports.tweetUpdate = async (q, r, next) => {
  let tweet = {};
  try {
    const tweetId = q.params.tweetId;
    tweet = await getTweet(tweetId);
    const body = q.body;
    await updateTweet(tweetId, body);
    r.redirect("/tweets");
  } catch (err) {
    const errors = Object.keys(err.errors).map((key) => err.errors[key].message);
    r.status(400).render("tweets/form", { errors, tweet, isAuth: q.isAuthenticated(), user: q.user } );
  }
};
