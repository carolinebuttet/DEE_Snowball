const startButton = document.querySelector(".intro button");
const finishStreamButton = document.querySelector("#end-exp");
const restartButton = document.querySelector("#restart");
const screenShotButton = document.querySelector("#screenshot");
const fanButton = document.querySelector("#fan");
const introContainer = document.querySelector(".intro");
const liveStreamContainer = document.querySelector(".live-stream");
const endScreenContainer = document.querySelector(".end-screen");
const quote = document.querySelector(".video-container p");
const downloadButton = document.querySelector("#download-card");
let citation = "";

// changer le temps de délai d'apparition du texte
const APPEAR_TIME = 1500;

const addListeners = ()=>{
  startButton.addEventListener("click", showLiveStream);
  finishStreamButton.addEventListener("click", showEndScreen);
  restartButton.addEventListener("click", resetExp);
  fanButton.addEventListener("click", activateFan);
  downloadButton.addEventListener("click", downloadCard);
}

const downloadCard = () =>{
  console.log('take screen shot!')
  html2canvas(document.querySelector("#capture"), {
    allowTaint: true,
  }).then(canvas => {
      //document.body.appendChild(canvas)
      // trigger a downlaod with the canvas as an image!
      var link = document.createElement('a');
      link.download = 'dee-comme-neige.png';
      link.href = canvas.toDataURL()
      link.click();
  });

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
  console.log("vroum!");
  console.log('quote',quote);
  window.setTimeout(()=>{
    quote.classList.add("visible");
  }, APPEAR_TIME);
  
}

const initQuote = ()=>{
  console.log('init quote!', citations);
  var today = new Date().getDate();
  console.log('today=', today);
  citation = citations[today];
  console.log('citation = ', citation);
  quote.innerHTML = citation;
}

const init = () => {
  addListeners();
  initQuote();
}

init();

