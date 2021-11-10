const startButton = document.querySelector(".intro button");
const finishStreamButton = document.querySelector("#end-exp");
const restartButton = document.querySelector("#restart");
const fanButton = document.querySelector("#fan");
const introContainer = document.querySelector(".intro");
const liveStreamContainer = document.querySelector(".live-stream");
const endScreenContainer = document.querySelector(".end-screen");

const addListeners = ()=>{
  startButton.addEventListener("click", showLiveStream);
  finishStreamButton.addEventListener("click", showEndScreen);
  restartButton.addEventListener("click", resetExp);
  fanButton.addEventListener("click", activateFan);
}

const showLiveStream = () => {
  introContainer.style.display = "none";
  liveStreamContainer.style.display = "flex";
}

const showEndScreen = () => {
  liveStreamContainer.style.display = "none";
  endScreenContainer.style.display = "flex";
}

const resetExp = () => {
  endScreenContainer.style.display = "none";
  introContainer.style.display = "flex";
}

const activateFan = () => {
  console.log("vroum!")
}

const init = () => {
  addListeners();
}

init();

