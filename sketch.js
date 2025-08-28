function setup() {
  createCanvas(400, 400);
}
let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  background(120);
  textSize(40)

 text("😎🤙", xJogador1, 100)
 text("✌😋", xJogador2, 150)
  
 rect(350,0,10,400)
 xJogador1 = xJogador1 + random(20);
 xJogador2 = xJogador2 + random(20);
  
}