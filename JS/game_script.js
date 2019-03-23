// глобальные пременные для CSS
var left=400;
var bottom=150;
var box;
// функция, выполняется при загрузке - находит элементы по id присваивает им имена
window.onload = function(){
figure=document.getElementById('player');
keywhite=document.getElementById('key_card_white');
keyblack=document.getElementById('key_card_black');
enemy=document.getElementById('monster');
lock_white=document.getElementById('locked_door_white');
lock_black=document.getElementById('locked_door_black');
 };



// // функция определения координат игрока при столкновениях с монстром и вещами
function get_coordinates(){
var p = figure.getBoundingClientRect();
var m = enemy.getBoundingClientRect();
var k = keywhite.getBoundingClientRect();
var b = keyblack.getBoundingClientRect();
if (p.right==k.right&&p.bottom==k.bottom) {
    alert("you have a white key!");
    lock_white.id="unlocked_door";
    keywhite.style.display="none";
  }

if (p.right==b.right&&p.bottom==b.bottom) {
    alert("you have a black key!");
    lock_black.id="unlocked_door";
    keyblack.style.display="none";
  }


if (p.right==m.right&&p.bottom==m.bottom){
  alert("monster detected!"); 
}

 

// определение столкновения со стенами "слева"
var x_left = (p.right-75)
var y_left= (p.bottom-25)
var left_elem = document.elementFromPoint(x_left,y_left);
left_empty = left_elem.id;
// alert(left_empty);

// определение столкновения со стенами "справа"
var x_right = (p.right+25)
var y_right= (p.bottom-25)
var right_elem = document.elementFromPoint(x_right,y_right);
right_empty = right_elem.id;
// alert(right_empty);

// определение столкновения со стенами "снизу"
var x_down = (p.right-25)
var y_down= (p.bottom+25)
var down_elem = document.elementFromPoint(x_down,y_down);
down_empty = down_elem.id;
// alert(down_empty);

// определение столкновения со стенами "сверху"
var x_up = (p.right-25)
var y_up= (p.bottom-75)
var up_elem = document.elementFromPoint(x_up,y_up);
up_empty = up_elem.id;
// alert(up_empty);


}

// обаботчики нажатий на клавиши
window.onkeydown = function(){


 // left
 if(event.keyCode==37){
    get_coordinates();
    if (left_empty!="wall"&&left_empty!="locked_door_white"&&left_empty!="locked_door_black") {
    left=left-50;
    figure.style.left = left + 'px';
    figure.style.backgroundImage='URL("IMG/player_l.png")';
    }

  }
  // right
    else if(event.keyCode==39){
      get_coordinates();
      if (right_empty!="wall"&&right_empty!="locked_door_white"&&right_empty!="locked_door_black") {
      left=left+50;
      figure.style.left= left + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
      }
}
    
   // down
    else if(event.keyCode==40){
      get_coordinates();
      if (down_empty!="wall"&&down_empty!="locked_door_white"&&down_empty!="locked_door_black") {
      bottom=bottom-50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
     }
    
    }
// up
    else if(event.keyCode==38){
      get_coordinates();
      if (up_empty!="wall"&&up_empty!="locked_door_white"&&up_empty!="locked_door_black") {
      bottom=bottom+50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_l.png")';
     }
     }  
    }
  


// обаботчики нажатия кнопок на станице
function up(){
  bottom=bottom+50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_l.png")';
  var p = figure.getBoundingClientRect();
  var m = enemy.getBoundingClientRect();
  console.log("player position:" + p.right)
  if (p.right-m.left<1){
    alert("collision detected!"); 
};
	
}

function down(){
  bottom=bottom-50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
  var p = figure.getBoundingClientRect();
  var m = enemy.getBoundingClientRect();
  console.log("player position:" + p.right)
  if (p.right-m.left<1){
    alert("collision detected!"); 
};
}

function lefty(){
  left=left-50;
    figure.style.left = left + 'px';
    figure.style.backgroundImage='URL("IMG/player_l.png")';
  var p = figure.getBoundingClientRect();
  var m = enemy.getBoundingClientRect();
  console.log("player position:" + p.right)
  if (p.right-m.left<1){
    alert("collision detected!"); 
};
	
}

function right(){
  left=left+50;
      figure.style.left= left + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
  var p = figure.getBoundingClientRect();
  var m = enemy.getBoundingClientRect();
  console.log("player position:" + p.right)
  if (p.right-m.left<1){
    alert("collision detected!"); 
};
	
}