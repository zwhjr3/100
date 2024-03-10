function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
video.size(400, 400);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function take_snapshot() {
console.log(img_id);
Wecam.snap(function(data_uri)
{
   if (img_id=="selfie1"){
    document.getElementById("result1").innerHTML= '<img id="selife1" src"'+data_uri+'"/>';
   }
   if (img_id=="selfie2"){
    document.getElementById("result2").innerHTML= '<img id="selife2" src"'+data_uri+'"/>';
   }
   if (img_id=="selfie3"){
    document.getElementById("result3").innerHTML= '<img id="selife3" src"'+data_uri+'"/>';
   }
}
)};

setTimeout(function()
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "selfie in 10 sec";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    SpeechSynthesis.speak(utterThis);
}, 5000);
