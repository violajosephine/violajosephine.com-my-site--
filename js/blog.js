const url = "https://kea21spring-0a0d.restdb.io/rest/test";
const options = {
  headers: {
    "x-apikey": "60534ad0ff8b0c1fbbc28be2",
  },
};

fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handlePosts(data);
    console.log(data);
  });

function handlePosts(data) {
  data.forEach(showPost);
  console.log(data);
}

function showPost(post) {
  console.log(post);
  //grab template
  const template = document.querySelector(".post_template").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content

  copy.querySelector("a").href = "blog_post.html?id=" + post._id;
  copy.querySelector(".post_title").textContent = post.title;
  copy.querySelector(".post_date").textContent = post.date_published;
  copy.querySelector(".post_image").src =
    "https://kea21spring-0a0d.restdb.io/media/" + post.image;
  copy.querySelector(".post_text").innerHTML = post.intro;

  //grab parent
  const parent = document.querySelector("#posts");
  //append child
  parent.appendChild(copy);
}

const other_url = "https://kea21spring-0a0d.restdb.io/rest/thoughts";
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
    handleThought(otherdata);
    console.log(otherdata);
  });

function handleThought(otherdata) {
  otherdata.forEach(showThought);
  console.log(otherdata);
}

function showThought(thought) {
  console.log(thought);
  //grab template
  const template = document.querySelector(".thought_template").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content

  copy.querySelector(".thought_text").innerHTML = thought.text;
  copy.querySelector(".date_thought").textContent = thought.date;

  //grab parent
  const parent = document.querySelector("#posts");
  //append child
  parent.appendChild(copy);
}
