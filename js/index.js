const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("no reload");
  console.log(form.elements.breakie.value);

  document.querySelector("button[type=submit").disabled = true;

  const payload = {
    title: form.elements.breakie.value,
  };

  //store the post
  fetch("https://kea21spring-0a0d.restdb.io/rest/breakfast", {
    method: "POST",
    headers: {
      "x-apikey": "60534ad0ff8b0c1fbbc28be2",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      console.log(response);

      form.elements.breakie.value = "";
      document.querySelector("#question").textContent = "Yummy dude!";
    })
    .catch((err) => {
      console.error(err);
    });
});
