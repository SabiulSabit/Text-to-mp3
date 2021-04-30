const gtts = require("gtts");

let speech = "Hello, This is Sabiul"; // Your Text Goes Here

let gTTS = new gtts(speech, "en"); 

gTTS.save("speech.mp3", (err, result) => {
  if (err) {
    throw err;
  } else {
    console.log("Convert To .mp3 !! ");
  }
});
