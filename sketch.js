//Create variables here
var dog,happydog,database,foodS,foodStock

function preload()
{
  //load images here
  dog = loadImage("images/dogImg1.png")
  happydog = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(200,200)
  dog.addImage(dog)
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)
if(keyIsDown(UP_ARROW)){
 writeStock(foodS)
 dog.addImage(happydog)
}
text("food stock : " + foodStock)
textSize(35)
stroke(255,0,0)
strokeWeight(7)

  drawSprites();
  //add styles here

}

function readStock(data){
foodS = data.val;
}

function writeStock(x){
database.ref('/').update({
  Food : x
})
}



