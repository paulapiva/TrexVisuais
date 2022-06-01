
var trex ,trexCorrendo;
var solo, soloImagem, soloInvisivel;
var rand, nuvem, imagemdanuvem;

function preload(){
  trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloImagem = loadImage("ground2.png")
  imagemdanuvem = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trexCorrendo);
  trex.scale = 0.5
  trex.x = 40;
 
  //criação chão
  solo = createSprite(200,180,400,20);
  solo.addImage("solo",soloImagem)

  //chão Invisivel
  soloInvisivel = createSprite(200,190,400,10);
  soloInvisivel.visible = false
  trex.depth = solo.depth
  solo.depth = solo.depth+1
  
  randomica = Math.round(random(1,10))
  console.log(randomica)
  
  
}

function draw(){
  background("gray")

  solo.velocityX = -4;
  if(solo.x<0){
    solo.x = solo.width/2;
  }
  
  //Pulo do Trex
  if(keyDown("space")&& trex.y >= 100){
    trex.velocityY = -10;
  }
  //gravidade
  trex.velocityY = trex.velocityY +0.8;

  gerarNuvens()

  //colisao com chão
  trex.collide(soloInvisivel)
  
  drawSprites();
 
}

//funções
function gerarNuvens(){
 if(frameCount % 80 === 0) {
    nuvem = createSprite(580,100,40,10);
    //nuvem = createSprite(580,round(random(10,150)),40,10);
    nuvem.addImage("Muven",imagemdanuvem);
    nuvem.scale = random(0.3,0.6)
    nuvem.y = Math.round(random(10,150));
    //console.log(nuvem.y)
    //nuvem.scale = 0.6;
    
    nuvem.velocityX = -3;
    nuvem.depth = trex.depth
    trex.depth = trex.depth + 1;
  }
  
}