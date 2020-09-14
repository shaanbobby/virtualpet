//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload(){
  saddog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png"); 
}



function setup() {
  createCanvas(500, 500);
  database=database=firebase.database()
  dog=createSprite(200,400,150,150);
  dog.addImage(saddog);
  dog.scale=0.15;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
	
  
}


function draw() { 
  background(46,139,87); 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  textSize(15);
  text("food remaining"+foodS,170,200);
  //add styles here

}
function writeStock(x){
 if(x<=0) {
   x=0;
 } 
 else{
   x=x-1;
 }  
  database.ref("/").update({
food:x
  })
}
function readStock(data){
  foodS=data.val();
}

