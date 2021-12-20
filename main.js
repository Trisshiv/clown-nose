nose_x = 0;
nose_y = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
} 

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);//width, height
    video.hide();
    postNet = ml5.poseNet(video, modelLoaded);  
    postNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("Nose x value is " + nose_x);
        console.log("Nose y value is " + nose_y);
    }
}

function modelLoaded() {
    console.log("posenet is Initialized");
}

function draw() {
    image(video, 0, 0, 300, 300);// var, x, y, width, height
    /*stroke(255,50,0);
    fill(255,0,0);
    circle(nose_x, nose_y, 20);*/
    image(clown_nose, nose_x-12.5, nose_y-12.5, 25, 25);
}
  
function take_snapshot() {
    save('myFilterImage.png');
}