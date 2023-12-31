noseX=0
noseY=0

function preload() {
sunglasses=loadImage("sunglasses1.png")
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPose)
}

function draw() {
image(video, 0,0, 300, 300)
image(sunglasses, noseX-40, noseY-15, 80,20)
}

function takeSnapShot() {
    save("myimage.png")
}

function modelLoaded(){
    console.log("poseNet is loaded");
}

function gotPose(result){
    if (result.length>0) {
        console.log(result);
        noseX=result[0].pose.nose.x
        noseY=result[0].pose.nose.y
    }
}