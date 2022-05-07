//criando as váriaveis
var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;
//carregando as imagens
function preload() {
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}
//definindo a área da tela que será usada
function setup() {
  createCanvas(400, 400);

  // Movendo o fundo

  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = -4;

  //Criando menino que corre

  boy = createSprite(200, 200);
  boy.addAnimation("Runner-1.png", "Runner-2.png", "Runner-1.png");
  boy.scale = 0.07;

  // Criando Boundary (Limite) esquerdo
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  //Crie Boundary direito
  rightBoundary = createSprite(400, 400, 100, 800);
  rightBoundary.visible = false;
}
//desenhando o "background"
function draw() {
  background(0);
  path.velocityY = 4;

  // Menino se movendo no eixo X com o mouse

  boy.x = World.mouseX;

//criando as fronteiras 

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //Reiniciar o fundo

  if (path.y < 0) {
    path.y = reset(pathImg);
  }

  drawSprites();
}
// objetivo semi-concluído