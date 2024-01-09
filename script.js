const btnEl = document.querySelectorAll(".drum");
const drumkit = document.querySelector(".drums-container");
const drumSet = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "crash",
  l: "snare",
  k: "kick-bass",
};

const playSound = function (key) {
  let audio = new Audio(`./sounds/${drumSet[key]}.mp3`);
  audio.play();
  const activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300);
};

const eventHandler = function (e) {
  if (!e.target.classList.contains("drum")) return;
  const clicked = e.target.classList[0];
  playSound(clicked);
};

drumkit.addEventListener("click", eventHandler);
window.addEventListener("keydown", function (e) {
  const clicked = e.key;
  playSound(clicked);
});
