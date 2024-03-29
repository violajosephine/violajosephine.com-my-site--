const url =
  "https://kea21spring-0a0d.restdb.io/rest/test?q={}&sort=_created&dir=-1&?fetchchildren=true";

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
  data.forEach(showContent);
  console.log(data);
}

function showContent(post) {
  if (post.type == "blog") {
    console.log(post);
    //grab template
    const template = document.querySelector(".post_template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content

    copy.querySelector("a").href = "blog_post.html?id=" + post._id;
    copy.querySelector(".post_title").textContent = post.title;
    copy.querySelector(".post_date").textContent = post.date_published;
    copy.querySelector(".post_image").src = post.image;

    copy.querySelector(".post_text").innerHTML = post.intro;

    //grab parent
    const parent = document.querySelector("#posts");
    //append child
    parent.appendChild(copy);
  } else if (post.type == "thought") {
    //grab template
    const template = document.querySelector(".thought_template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content

    copy.querySelector(".thought_text").innerHTML = post.intro;
    copy.querySelector(".date_thought").textContent = post.date;

    //grab parent
    const parent = document.querySelector("#posts");
    //append child
    parent.appendChild(copy);
  } else if (post.type == "quote") {
    //grab template
    const template = document.querySelector(".quote_template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content

    copy.querySelector(".quote_text").innerHTML = post.intro;
    copy.querySelector(".date_quote").textContent = post.date;

    //grab parent
    const parent = document.querySelector("#posts");
    //append child
    parent.appendChild(copy);
  }
}
