const speakBtn = document.getElementById("speakBtn");
speakBtn.addEventListener("click", () => {
  const synthesis = window.speechSynthesis;
//   var voices = window.speechSynthesis.getVoices();
  // console.log(voices);
  const speech = new SpeechSynthesisUtterance(
    `${document.getElementById("textContent").value}`
  );
  synthesis.speak(speech);
});
