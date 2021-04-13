Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
prediction1 = "";
prediction2 = "";
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Hyw5zdGnP/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
    
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first Prediction is " + prediction1;
    speak_data2 = "The scecond Prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}
function check(){
    speak();
}