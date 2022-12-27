var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
    document.getElementById("nothing").innerHTML = "Searching For..."
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;
    Textbox.innerHTML = Content;
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Searching...";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}


function search() {
    var content = textbox.innerHTML;
    document.getElementById("result").innerHTML = "Here's what we found: https://www.google.com/search?q="+content+" - The link is copied!";
    navigator.clipboard.writeText("https://www.google.com/search?q="+content);
    document.getElementById("nothing").innerHTML = ""
}