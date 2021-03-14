document.querySelector("#dude").addEventListener("click", playPause);
var myVideo = document.getElementById("about_me_vid");

function playPause() {
  console.log("playPause");
  if (myVideo.paused == true) {
    myVideo.play();
    console.log(myVideo.paused);
  } else {
    myVideo.pause();
    // playBtn.style.backgroundImage = "url(img/play.svg)";
  }
}
