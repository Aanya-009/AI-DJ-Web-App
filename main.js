leftWriatX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded(){
    console.log('Model is initiallized');
}

function gotResults(results){
    if(results > 0){
        console.log(results);

        leftWriatX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}