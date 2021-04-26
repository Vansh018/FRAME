

function setup(){
    canvas = createCanvas(1000,1000);
    canvas.position(300, 350);
    video = createCapture(VIDEO);
    video.hide();
    circle(300,95,20);
    circle(500,95,20);
    circle(500,300,20);
    circle(300,300,20);
}

function draw(){
    image(video, 300, 100, 200, 200);
   
}
function take_snapshot()
{
save('studen_name.png'); 
}