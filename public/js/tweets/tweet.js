
window.addEventListener("DOMContentLoaded", function () {
    bindTweets();
});

function bindTweets() {
  const elements = document.querySelectorAll(".btn-danger");
  const tweetList = document.querySelector("#tweet-list");
  elements.forEach((e) => {
    e.addEventListener("click", (event) => {
      const tweetId = event.target.getAttribute("tweetId");
      axios
        .delete("/tweets/" + tweetId)
        .then(function (response) {
          tweetList.innerHTML = response.data;
          bindTweets();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}