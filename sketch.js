
var db;
var form;
var gameState=0;
var playercount=0;
function setup(){
    createCanvas(500,500);
    db=firebase.database();
   form=new Form()
   
}

function draw(){
    background("white");
   form.display()
}

