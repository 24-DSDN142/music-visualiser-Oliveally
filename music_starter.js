
let firstRun = true;
let heartImg;
let heartInvertImg;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) {
    heartImg = loadImage("Heartforcode.png");
    heartInvertImg = loadImage("HeartforcodeINVERTED.png");

    firstRun = false;
  }


  background(1,12,22,255)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let rotationspeed = map(drum,0,width,0.1,1); //changes rotation speed of ellipses
  
// large background ellipses 

push();
translate(canvasWidth/2, canvasHeight/2)
scale(0.5);
if (drum > 50) {
  image(heartInvertImg, -2183/2, -1542/2);
}
else {
  image(heartImg, -2183/2, -1542/2);
}
pop();

push();
if(bass > 0) {
  fill (173,216,230,255);
  ellipse(1920-200, 1080-200, drum, drum)}

   // small background ellipses
push();
   if(counter > 1) {
    map(drum,0,100,200,200);
    fill (7,39,63,255);
    ellipse(200, 200, drum, drum);
    }
push();
   if(counter > 1) {
    map(drum,0,100,200,200);
    fill (173,216,230,255);
    ellipse(1920-200, 200, drum, drum);
    }  

push();
    if(counter > 1) {
     map(drum,0,100,200,200);
     fill (173,216,230,255);
     ellipse(200, 1080-200, drum, drum);
     }
     
push();
  if(counter > 1) {
    map(drum,0,100,400,400);
    fill (7,39,63,255);
    ellipse(1920-200, 1080-200, drum, drum);}


   pop();



}