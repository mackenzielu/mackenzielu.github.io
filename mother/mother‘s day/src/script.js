let img;
const detail = 6;
let particles = [];
let grid = [];
let particleImage;
let ctx;
function preload() {
  img = loadImage('https://raw.githubusercontent.com/mackenzielu/mackenzielu.github.io/main/mother/mama.png');
}

class Particle {
  constructor (x, y) {
    this.x = x || random(width);
    this.y = y || random(height);
    this.prevX = this.x;
    this.speed = 0;
    this.v = random(0, 0.7);
  }
  
  update (speed) {
    if (grid.length) {
      this.speed = grid[floor(this.y / detail)][floor(this.x / detail)] * 0.97;
    }
    this.x += (1 - this.speed) * 3 + this.v;
    
    if (this.x > width) {
      this.x = 0;
    }
  }
  
  draw () {
    image(particleImage, this.x, this.y);
  }
}

/* ====== STEP 1 ====== */
function step1 () {
  clear();
  noLoop();
  image(img, 0, 0, width, height);
  noFill();
  stroke(120);
  strokeWeight(1);
  strokeCap(SQUARE);
  ctx.globalAlpha = 1;
  for (let y = 0; y < height; y+=detail) {
    for (let x = 0; x < width; x+=detail) {
      rect(x + 0.5, y + 0.5, detail, detail);
    }
  }
}

/* ====== STEP 2 ====== */
function step2 () {
  clear();
  ctx.globalAlpha = 1;
  noLoop();
  image(img, 0, 0, width, height);
  loadPixels();
  noStroke();
  for (let y = 0; y < height; y+=detail) {
    for (let x = 0; x < width; x+=detail) {
      const r = pixels[(y  * width + x) * 4];
      const g = pixels[(y  * width + x) * 4 + 1];
      const b = pixels[(y  * width + x) * 4 + 2];
      const _color = color(r, g, b);
      const _brightness = floor(brightness(_color) / 100 * 255);
      fill(_brightness);
      rect(x, y, detail, detail);
    }
  }
}

/* ====== STEP 3 ====== */
function goToStep3 () {
  ctx.globalAlpha = 1;
  loop();
  
  grid = [];
  particles = [];
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle(null, (i/20) * height));
  }
}

function step3 () {
  clear();
  particles.forEach(p => {
    p.update();
    p.draw();
  });
}

/* ====== STEP 4 ====== */
function goToStep4 () {
  clear();
  ctx.globalAlpha = 1;
  loop();
  image(img, 0, 0, width, height);
  loadPixels();
  clear();
  noStroke();
  
  grid = [];
  for (let y = 0; y < height; y+=detail) {
    let row = [];
    for (let x = 0; x < width; x+=detail) {
      const r = pixels[(y * width + x) * 4];
      const g = pixels[(y * width + x) * 4 + 1];
      const b = pixels[(y * width + x) * 4 + 2];
      const _color = color(r, g, b);
      const _brightness = brightness(_color) / 100;
      fill(_brightness * 255);
      rect(x, y, detail, detail);
      row.push(_brightness);
    }
    grid.push(row);
  }
  
  particles = [];
  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle(null, (i/3000) * height));
  }
}

function step4 () {
  clear();
  particles.forEach(p => {
    p.update();
    p.draw();
  });
}

/* ====== STEP 5 ====== */
function goToStep5 () {
  clear();
  ctx.globalAlpha = 1;
  loop();
  image(img, 0, 0, width, height);
  loadPixels();
  clear();
  noStroke();
  
  grid = [];
  for (let y = 0; y < height; y+=detail) {
    let row = [];
    for (let x = 0; x < width; x+=detail) {
      const r = pixels[(y * width + x) * 4];
      const g = pixels[(y * width + x) * 4 + 1];
      const b = pixels[(y * width + x) * 4 + 2];
      const _color = color(r, g, b);
      const _brightness = brightness(_color) / 100;
      fill(_brightness * 255);
      rect(x, y, detail, detail);
      row.push(_brightness);
    }
    grid.push(row);
  }
  
  particles = [];
  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle(null, (i/3000) * height));
  }
}

function step5 () {
  clear();
  particles.forEach(p => {
    p.update();
    ctx.globalAlpha = p.speed * 0.3;
    p.draw();
  });
}

/* ====== STEP 6 ====== */
function goToStep6 () {
  clear();
  ctx.globalAlpha = 1;
  loop();
  image(img, 0, 0, width, height);
  loadPixels();
  clear();
  noStroke();
  
  grid = [];
  for (let y = 0; y < height; y+=detail) {
    let row = [];
    for (let x = 0; x < width; x+=detail) {
      const r = pixels[(y * width + x) * 4];
      const g = pixels[(y * width + x) * 4 + 1];
      const b = pixels[(y * width + x) * 4 + 2];
      const _color = color(r, g, b);
      const _brightness = brightness(_color) / 100;
      row.push(_brightness);
    }
    grid.push(row);
  }
  
  particles = [];
  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle(null, (i/3000) * height));
  }
}

function step6 () {
  ctx.globalAlpha = 0.05;
  fill(0);
  rect(0,0,width,height);
  ctx.globalAlpha = 0.2;
  particles.forEach(p => {
    p.update();
    ctx.globalAlpha = p.speed * 0.3;
    p.draw();
  });
}

function setup () {
  const canvas = createCanvas(100,100);
  ctx = canvas.drawingContext;
  
  pixelDensity(1);
  
  particleImage = createGraphics(8, 8);
  particleImage.fill(255);
  particleImage.noStroke();
  particleImage.circle(4, 4, 4);
  
  windowResized();
  document.querySelector('#step').addEventListener('input', () => {
    if (window['goToStep' + step.value]) {
      window['goToStep' + step.value]();
    }
    draw();
  });
}

function windowResized () {
  const imgRatio = img.width/img.height;
  if (windowWidth/windowHeight > imgRatio) {
    resizeCanvas(floor(windowHeight * imgRatio), floor(windowHeight));
  } else {
    resizeCanvas(floor(windowWidth), floor(windowWidth / imgRatio));
  }
  noiseSeed(random(100));
  if (window['goToStep' + step.value]) {
    window['goToStep' + step.value]();
  }
  draw();
}

const texts = document.querySelectorAll('section p');
function draw () {
  window['step' + step.value]();
  
  texts.forEach(text => text.style.display = 'none');
  texts[step.value - 1].style.display = 'block';
}
