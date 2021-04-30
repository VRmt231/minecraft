var canvas=new fabric.Canvas("MainMC");
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
var player_object="";
var block_img_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
     player_object=Img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);  
     player_object.set({top:player_y,
    left:player_x});
    canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
    block_img_object=Img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({top:player_y,
        left:player_x});
        canvas.add(block_img_object);
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
    console.log("P and Shift is pressed together")
    block_img_width=block_img_width+10;
    block_img_height=block_img_height+10;
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
     console.log("Shift and M is pressed together");
     block_img_width=block_img_width-10;
     block_img_height=block_img_height-10;
     document.getElementById("current_width").innerHTML = block_img_width;
     document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(keypressed=='38'){
       up();
       console.log("up")
    }
    if(keypressed=='40'){
        down();
        console.log("down")
     }
     if(keypressed=='37'){
        left();
        console.log("left")
     }
     if(keypressed=='39'){
        right();
        console.log("right");
     }
     if(keypressed=='87'){
      new_image('wall.jpg');
      console.log("W")
     }
     if(keypressed=='71'){
        new_image('ground.png')
        console.log("G");
     }
     if(keypressed=='76'){
        new_image('light_green.png');
        console.log("L");
     }
     if(keypressed=='84'){
        new_image('trunk.jpg')
        console.log("T");
     }
     if(keypressed=='82'){
        new_image('roof.jpg')
        console.log("R");
     }
     if(keypressed=='89'){
        new_image('yellow_wall.png')
        console.log("Y");
     }
     if(keypressed=='68'){
        new_image('dark_green.png');
        console.log("D");
     }
     if(keypressed=='85'){
        new_image('unique.png')
        console.log("U");
     }
     if(keypressed=='67'){
        new_image('cloud.jpg')
        console.log("C");
     }
     
}
function up(){
   if(player_y>=0){
     player_y=player_y-block_img_height;
     console.log("block img height = "+block_img_height);
     console.log("When UP arrow is pressed, X ="+player_x+"Y ="+player_y);
     canvas.remove(player_object);
     player_update();
   }
}
function down(){
   if(player_y<=500){
     player_y=player_y+block_img_height;
     console.log("block img height = "+block_img_height);
     console.log("When UP arrow is pressed, X ="+player_x+"Y ="+player_y);
     canvas.remove(player_object)
     player_update();
   }
}
function left(){
   if(player_x>=0){
     player_x=player_x-block_img_width;
     console.log("block img width = "+block_img_width);
     console.log("When UP arrow is pressed, X ="+player_x+"Y ="+player_y);
     canvas.remove(player_object)
     player_update();
   }
}
function right(){
   if(player_x<=850){
     player_x=player_x+block_img_width;
     console.log("block img width = "+block_img_width);
     console.log("When UP arrow is pressed, X ="+player_x+"Y ="+player_y);
     canvas.remove(player_object)
     player_update();
   }
}

