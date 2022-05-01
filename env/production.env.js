module.exports = {
  databaseUrl: "mongodb+srv://10git:123@cluster0.s465p.mongodb.net/twitter?retryWrites=true&w=majority",
  httpPort: 80,
  httpsPort: 443,
  cert: "/etc/letsencrypt/live/twitter.10git.fr/fullchain.pem",
  key: "/etc/letsencrypt/live/twitter.10git.fr/privkey.pem",
};

git commit -m "add prod cert"
git push origin main 