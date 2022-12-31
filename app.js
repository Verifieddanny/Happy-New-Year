window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});

const spans = document.querySelectorAll("span");

spans.forEach((span) => {
  span.addEventListener("click", function () {
    let msg = new SpeechSynthesisUtterance();
    msg.text = `Happy New Year Guys, hope you are ready for this year's rollercoster cuz I am`;
    window.speechSynthesis.speak(msg);
  });
});
