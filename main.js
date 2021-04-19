
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
  }
  
  function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  