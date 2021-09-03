img = "";
status = "";

function preload(){
img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420)
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    Fill("#FF0000");
    Text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    Fill("#FF0000");
    Text("Cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.ObjectDetector('cocossd'modelloaded);
document.getElementById("status").innerHTML = "Status : Decting Objects";
}

function modelloaded() {
    console.log("Model Loaded!")
    status = true;
    ObjectDecetor.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}