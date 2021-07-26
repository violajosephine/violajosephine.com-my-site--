const urlParams = new URLSearchParams(window.location.search);
//in the url grab id and store them under id
const id = urlParams.get("id");
const topic = urlParams.get("topic");
const length = urlParams.get("length");
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

  document.querySelector("#genre_text").textContent = post.topic;
  document.querySelector("#title").textContent = post.title;
  document.querySelector("#alternative_headline").textContent =
    post.alternate_headline;
  document.querySelector("#author").textContent = "by " + post.author;
  document.querySelector("#date").textContent = post.date_published;
  document.querySelector("#intro").innerHTML = post.intro;
  document.querySelector("#blog_image").src = post.image;
  document.querySelector("#image_caption").innerHTML = post.image_caption;
  document.querySelector("#body1").innerHTML = post.body1;
  document.querySelector("#quote").innerHTML = post.quote;
  document.querySelector("#quote_author").textContent = post.quote_author;
  document.querySelector("#body2").innerHTML = post.body2;
  document.querySelector("#video").src = post.youtube;
  var video = document.getElementById("video");
  if (video.src == "undefined" || '""') {
    video.style.display = "none";
  }
  document.querySelector("#audio").src =
    "https://kea21spring-0a0d.restdb.io/media/" + post.extra;
  console.log("https://kea21spring-0a0d.restdb.io/media/" + post.extra);
  var audio = document.getElementById("audio");
  if (
    audio.src == "https://kea21spring-0a0d.restdb.io/media/undefined" ||
    "https://kea21spring-0a0d.restdb.io/media/"
  ) {
    audio.style.display = "none";
  }
  document.querySelector("main").classList.remove("hidden");
  const other_url =
    "https://kea21spring-0a0d.restdb.io/rest/test?max=" +
    // post.length +
    // "&?q=={topic:" +
    // post.topic +
    // "}" +
    "&?q=={id:{$not:" +
    id +
    "}}" +
    "&?q=={type:blog}";
  console.log(other_url);
  console.log(post.topic);
  console.log(post.length);

  const other_options = {
    headers: {
      "x-apikey": "60534ad0ff8b0c1fbbc28be2",
    },
  };

  fetch(other_url, other_options)
    .then(function (res) {
      return res.json();
    })
    .then(function (otherdata) {
      handleOtherPosts(otherdata);
      console.log(otherdata);
    });

  function handleOtherPosts(otherdata) {
    otherdata.forEach(showOtherPosts);
    console.log(otherdata);
  }

  function showOtherPosts(otherpost) {
    if (
      (otherpost.type == "blog") &
      (otherpost._id != post._id)
      // & (otherpost.topic == "psychology")
    ) {
      console.log(otherpost);
      //grab template
      const template = document.querySelector(".post_template").content;
      //clone it
      const copy = template.cloneNode(true);
      //change content

      copy.querySelector("a").href = "blog_post.html?id=" + otherpost._id;
      copy.querySelector(".other_post_title").textContent = otherpost.title;
      copy.querySelector(".other_post_date").textContent =
        otherpost.date_published;
      copy.querySelector(".other_post_image").src = otherpost.image;
      const otherimage = copy.querySelector(".other_post_image");
      if (otherimage.src == "https://kea21spring-0a0d.restdb.io/media/") {
        console.log(otherimage.src);
        otherimage.style.display = "none";
      } else if ((otherpost.type == "thought") & (otherpost._id == post._id)) {
        var other = copy.getElementByClass("other_post");
        other.style.display = "none";
        copy.querySelector(".other_post_more").style.display = "none";
      }
      copy.querySelector(".other_post_text").innerHTML =
        otherpost.intro + "...";
      //grab parent
      const parent = document.querySelector("#other_posts");
      //append child
      parent.appendChild(copy);
    }
  }
}
