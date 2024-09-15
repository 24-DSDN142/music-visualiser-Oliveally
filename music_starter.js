
let firstRun = true;
let heartImg;
let heartInvertImg;
let heartmonitorIMG1;
let heartmonitor2IMG;



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) {
    heartImg = loadImage("Heartforcode.png");
    heartInvertImg = loadImage("HeartforcodeINVERTED.png");
    heartmonitorIMG1 = loadImage("heartmonitor1IMG.png");
    heartmonitor2IMG = loadImage("heartmonitor2IMG.png"); 
    firstRun = false;
  }

  background(1,12,22,255);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);


// heart monitor lines


// heart
if (drum > 1){
  map(drum,0,100,200,200);
  image(heartInvertImg, -2183/2, -1542/2, drum, drum);
}

push();
translate(canvasWidth/2, canvasHeight/2);
scale(0.5);
if (drum > 80) {
  image(heartInvertImg, -2183/2, -1542/2);
}
else {
  image(heartImg, -2183/2, -1542/2);
}
pop();

// heart image beat


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

   if(counter > 1) {
    map(drum,0,100,200,200);
    fill (173,216,230,255);
    ellipse(1920-200, 200, drum, drum);
    }  


    if(counter > 1) {
     map(drum,0,100,200,200);
     fill (173,216,230,255);
     ellipse(200, 1080-200, drum, drum);
     }
     

  if(counter > 1) {
    map(drum,0,100,400,400);
    fill (7,39,63,255);
    ellipse(1920-200, 1080-200, drum, drum);}


   pop();

   if (bass > 0){
    map(bass,0,100,200,200);
    image(heartmonitorIMG1,-2183/2,-1542/2,bass,bass);
    }
    
    push();
    translate(canvasWidth/2, CanvasHeight/2);
    scale(0.5);
    if (bass > 50) {
      image(heartmonitor2IMG,-2183,-1542); 
    }
    pop()
  



}
