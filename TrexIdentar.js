var trex, trex_running;var solo, soloImagem;
function preload() {trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");soloImagem = loadImage("ground1.png");}
function setup() {createCanvas(600, 200);trex = createSprite(50,160,20,50);trex.addAnimation("running", trex_running);trex.scale = 0.5;solo = createSprite(200,180,400,20);solo.addImage("solo",soloImagem);}
function draw() {background("white");solo.velocityX = -4;if (solo.x < 0) {solo.x = solo.width / 2;}if (keyDown("space")) {trex.velocityY = -10;}trex.velocityY = trex.velocityY + 0.8;trex.collide(solo);drawSprites();}
