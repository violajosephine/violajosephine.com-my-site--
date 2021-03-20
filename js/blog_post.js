const urlParams = new URLSearchParams(window.location.search);
//in the url grab id and store them under id
const id = urlParams.get("id");
console.log(id);

const url = "https://kea21spring-0a0d.restdb.io/rest/test/" + id;
const options = {
  headers: {
    "x-apikey": "60534ad0ff8b0c1fbbc28be2",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showPost(data));

function showPost(post) {
  console.log(post);

  document.querySelector("#genre").textContent = post.genre;
  document.querySelector("#title").textContent = post.title;
  document.querySelector("#alternative_headline").textContent =
    post.alternate_headline;
  document.querySelector("#author").textContent = post.author;
  document.querySelector("#intro").textContent = post.intro;
  document.querySelector("#blog_image").src =
    "https://kea21spring-0a0d.restdb.io/media/" + post.image;
  document.querySelector("#image_caption").textContent = post.image_caption;
  document.querySelector("#body1").textContent = post.body1;
  document.querySelector("#quote").textContent = post.quote;
  document.querySelector("#quote_author").textContent = post.quote_author;
  document.querySelector("#body2").textContent = post.body2;
}
