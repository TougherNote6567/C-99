var SpeechRecognition = window.webkitSpeechRecognition;
var sra = new SpeechRecognition();

function begin(){
    document.getElementById("textBox").innerHTML = "";
    sra.start();
}
 sra.onresult = 
 function (event){
console.log(event);
var content = event.results[0][0].transcript;
console.log(content);

document.getElementById("textBox").innerHTML = content;
talk();

 }

 function talk(){
    var synth = window.speechSynthesis; 
    speak_data = document.getElementById("textBox").innerHTML; 
    var utterThis = new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utterThis);
    Webcam.attach(camera);
 }

 camera = document.getElementById("cam");
 Webcam.set({
width : 360,
height : 300,
image_format : 'jpg',
jpg_quality : 100
 });