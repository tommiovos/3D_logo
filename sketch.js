let x;
let b;
let img;
let anim;
let move = 0.01;
var clickOne;
var playOnce = 0;
let onOff;
let boxOne;
var angle;
var updateSpeed;
let canvaX;
let canvaY;
let moveX;
let moveY;
let moveZ;
let boxSize;
let speedUp;
var speedPlus;
let y;
let active1;
let active2;
let locX;
let locY;
let stopSpeed;
let resetSize;
let cubeStart;
let next1;
let next2;
let next3;
let next4;


function preload() {
  // img = loadImage('assets/logo.png');
  // anim.hide();

}

function playVid() {
  anim.loop()
}


function setup() {
  anim = createVideo('assets/newanim.mp4');
  anim.loadPixels();
  anim.hide();
  playVid();
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  recWidth = 80;
  x = 0;
  y = 0;
  b = windowWidth;
  move = 0.01;
  onOff = true;
  angle = 0;
  updateSpeed = 0.01;
  canvaX = (windowWidth / 3 - windowWidth / 1.3);
  canvaY = (windowHeight - windowHeight / 1.55);
  moveX = canvaX;
  moveY = canvaY;
  moveZ = 0;
  resetSize = windowWidth / 20;;
  boxSize = resetSize;
  speedPlus = 8;
  active1 = false;
  active2 = false;
  locX = windowHeight / 2;
  locY = windowWidth / 2;
  stopSpeed = false;
  cubeStart = true;
  next1 = false;
  next2 = false;
  next3 = false;
  next4 = false;

}




function draw() {

  background(50, 230, 30);
  fill(230, 120, 20);

  if(cubeStart = true) { 
  playCube();
  }
  

}



function playCube() {

  ortho();
  ambientLight(150);
  pointLight(255, 255, 255, locX, locY, 255);

  translate(moveX, moveY, moveZ);
  rotateX(angle);
  rotateY(angle);
  texture(anim);
  box(boxSize);

  if (!onOff) {
    if (next1 == false) {
    moveY = moveY + 5;
    updateSpeed = 0.1;
    boxSize = boxSize - 2.5;
    }
  }

  if (boxSize < 1 && next1 == false) {
    next1 = true;
    boxSize = 0;
    next2 = true;
  }
  if(next2 == true && boxSize >= 0 && next3 == false) {
    moveY = 40;
    moveX = -20;
    boxSize = boxSize + 10;
  }
  if (boxSize > 400) {
    next3 = true;
    boxSize = boxSize - 10;

  }
  
  angle += updateSpeed;

}



function mouseClicked() {
  onOff = !onOff;
 }

























  

//     updateSpeed = 0.07;
//     if (boxSize < windowHeight - windowHeight / 4) {
//       moveY = moveY - 3.2;
//       moveZ = moveZ + 2;
//       boxSize = boxSize + windowHeight / 80;
//     }
//   }

//   if (boxSize > (0.75*windowHeight - 1) && stopSpeed == false) {
//     speedPlus = (speedPlus * 1.01 + Math.pow(0, 0.005));
//     updateSpeed = 0.1;
//     moveX = moveX + speedPlus;
//   }

//   if (moveX >= windowWidth) {
//       moveX = moveX - windowWidth * 1.8;
//       boxSize = boxSize - 10;
//   }

//   if (speedPlus > 120) {
//     onOff = true;
//     stopSpeed = true;
//     boxSize = resetSize;
//     moveX = canvaX;
//     moveY = canvaY;
    
//       if(cubeStart == true) {

//       playCube();

//       }
    
//   }

//   // if (boxSize < 60) {
//   //   active2 = true;
//   //   speedPlus = 8;
    
//   // }

//   // if (active2 == true) {
//   //   onOff = true;
//   //   if (moveY > canvaY) {
//   //     moveY = moveY - 2;
//   //     updateSpeed = 0.01;
//   //     console.log('fin');
//   //       if (moveY == canvaY) {
//   //         moveX = canvaX;
//   //         active2 = false;
          
//   //       }
//   //   }
//   // }

//         if (onOff) {
//           boxSize = resetSize;
//           speedPlus = 8;
//           active1 = false;
//           active2 = false;
//           stopSpeed = false;
          
//         }

        

//   angle += updateSpeed;
//   //pop();
// }







//   // if (move === 0) {
//   //   move = 0.01;



//   // }
//   // else {

//   //   move = 0;


//   }
// }