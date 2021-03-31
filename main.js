function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ia2i5zCI9/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
image(video, 0, 0, 400, 300);
classifier.classify(video, gotResult);
}

function gotResult(error, result){
if(error){
    console.log("Error");
}

if(result){
    console.log(result);
    document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_accuracy_tag").innerHTML = result[0].confidence.toFixed(3);
}
}