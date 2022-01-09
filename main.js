img="";
status = "";
object = [];

function preload(){

img = loadImage("dog_cat.jpg")

}

function setup(){

canvas = createCanvas(640,420);
canvas.center();

objectdetector = ml5.objectDetector('cocossd',modelloaded);

document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTING";

}

function draw(){

image(img,0,0,640,420);

if(status != ""){
for(i=0;i<object.length;i++){

document.getElementById("status").innerHTML = " STATUS : OBJECT DETECTED";
fill("#FF0000");
percent = floor(object[i].confidence*100);
text(object[i].label + "" + percent + "%",object[i].x,object[i].y);
noFill();
stroke("#ff0000");
rect(object[i].x,object[i].y,object[i].width,object[i].height);


}

}
}




function modelloaded(){

console.log("model is loaded");
status = true;
objectdetector.detect(img,gotresult);

}

function gotresult(error,results){

if(error){

console.error(error);

}

else{

console.log(results);

}

}