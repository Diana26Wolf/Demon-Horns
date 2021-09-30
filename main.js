function preload() {
    dh = loadImage("Demon Horns.png")
}
dhX= 0
dhY= 0
function setup() {
    canvas = createCanvas(500, 370)
    canvas.position(427, 240)
    //camera starts now
    video = createCapture(VIDEO)
    video.size(500, 370)
    video.hide()
    //poesenet starts here
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotposes)
}

function modelLoaded() {
    console.log("Model Loaded Successfully!")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        dhX= results[0].pose.nose.x -180
        dhY= results[0].pose.nose.y -200
    }
}

function draw() {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0, 500, 370)
    pop()
    image(dh, dhX, dhY, 190, 160)

}
function Save_picture(){
    save("Demon_Me.png")
}