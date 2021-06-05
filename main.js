

function setup(){
    canvas = createCanvas(350,300);
    canvas.position(300, 350);
    video = createCapture(VIDEO);
    video.hide();
    video.center();
    
}

function draw(){
    image(video, 80, 50, 200, 200);
   
}
function take_snapshot()
{
save('studen_name.png'); 
}