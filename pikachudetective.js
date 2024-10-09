let images = []; 
let index = 0;   

function preload() {
 
  for (let i = 0; i <= 12; i++) { 
    images[i] = loadImage(`data/imagen${i}.jpeg`); 
  }
}

function setup() {
  createCanvas(640, 480);
  let nextButton = createButton('siguiente'); // Botón para avanzar
  nextButton.position(250, 440);
  nextButton.mousePressed(nextImage); 
}

function draw() {
  background(255);
  if (images[index]) { 
    image(images[index], 0, 0, width, height);
  }
}

function nextImage() {
  // Avanza a la siguiente imagen o vuelve al inicio si es el final
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
}
