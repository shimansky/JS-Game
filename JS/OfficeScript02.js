// глобальные пременные для CSS
var left=250;
var bottom=450;
var box;
var temp = 100;
var vertical=450;


// // блок функций анимации бота
//  var botMoveRight = function() {
//   temp=temp+50;
//   enemy.style.left = temp + 'px';
//
// }
//
//  var botMoveLeft = function() {
//   temp=temp-50;
//   enemy.style.left = temp + 'px';
//
// }
//
// var botMoveUp = function() {
//   vertical=vertical+50;
//   enemy.style.bottom = vertical + 'px';
//
// }
//
// var botMoveDown = function() {
//   vertical=vertical-50;
//   enemy.style.bottom = vertical + 'px';
//
// }
//
// function botMove(){
// setTimeout(botMoveRight, 500);
// setTimeout(botMoveRight, 1000);
// setTimeout(botMoveLeft, 1500);
// setTimeout(botMoveLeft, 2000);
//
// }



// функция, выполняется при загрузке - находит элементы по id присваивает им имена
window.onload = function(){
// alert("\"HIDDEN STRUCTURE\" you got somewhere in an unknown place... ")
figure=document.getElementById('player');
// keywhite=document.getElementById('key_card_white');
// keyblack=document.getElementById('key_card_black');
// enemy=document.getElementById('monster');
lock_white=document.getElementById('locked_door_white');
lock_black=document.getElementById('locked_door_black');
exit_door=document.getElementById('exit_door_open');
setInterval(get_coordinates,10);
// setInterval(botMove,2000);
 };



// // функция определения координат игрока при столкновениях с монстром и вещами
function get_coordinates(){
var p = figure.getBoundingClientRect();
// var m = enemy.getBoundingClientRect();
// var k = keywhite.getBoundingClientRect();
// var b = keyblack.getBoundingClientRect();

// логика работы дверей и карточек-ключей
// if (p.right==k.right&&p.bottom==k.bottom) {
//   var playerName = prompt("Твое имя:");
//   alert(playerName + ", тебя приняли на работу, можешь приступать!)))")
//   if(playerName != 0){alert("Получи свою карточку электронного доступа: "
//    + playerName + " status: active, serial number: 498, access: 01");
//   };
//     keywhite.style.display="none";
//   }
//
//
// if (p.right==b.right&&p.bottom==b.bottom) {
//     // alert("you have a black key!");
//     lock_black.id="unlocked_door";
//     keyblack.style.display="none";
//   }

// отслеживание выхода игрока с уровня
if (p.right>=600) {
  document.location.href = "Office.html";

};

if (p.right==350 && p.bottom==500) {
  document.location.href = "Office01.html"
}
// // отслеживание столкновений с ботом
//  if (p.right==m.right&&p.bottom==m.bottom){
//   alert("monster detected!");
//
// }



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
window.onkeyup = function(){


 // left
 if(event.keyCode==37){
    get_coordinates();

    if (left_empty!="wall" && left_empty!="wallCooler"&& left_empty!="wallSofa" && left_empty!="wallPlant" &&left_empty!="locked_door_white"&&left_empty!="locked_door_black") {
    left=left-50;
    figure.style.left = left + 'px';
    figure.style.backgroundImage='URL("IMG/player_l.png")';
    }
}

  // right
    else if(event.keyCode==39){
      get_coordinates();

      if (right_empty!="wall" && right_empty!="wallCooler"&& right_empty!="wallSofa" && right_empty!="wallPlant" &&right_empty!="locked_door_white"&&right_empty!="locked_door_black") {
      left=left+50;
      figure.style.left = left + 'px';

      figure.style.backgroundImage='URL("IMG/player_r.png")';
      }
}

   // down
    else if(event.keyCode==40){
      get_coordinates();

      if (down_empty!="wall"  && down_empty!="wallCooler"&& down_empty!="wallSofa" && down_empty!="wallPlant" &&down_empty!="locked_door_white"&&down_empty!="locked_door_black") {
      bottom=bottom-50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
      }
}

// up
    else if(event.keyCode==38){
      get_coordinates();

      if (up_empty!="wall"  && up_empty!="wallCooler"&& up_empty!="wallSofa" && up_empty!="wallPlant" &&up_empty!="locked_door_white"&&up_empty!="locked_door_black") {
      bottom=bottom+50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_l.png")';
     }
}

}



// обаботчики нажатия кнопок на станице
function up(){
   get_coordinates();
      if (up_empty!="wall" && up_empty!="wallCooler"&& up_empty!="wallSofa" && up_empty!="wallPlant" &&up_empty!="locked_door_white"&&up_empty!="locked_door_black") {
      bottom=bottom+50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_l.png")';
     }

}

function down(){
  get_coordinates();
      if (down_empty!="wall" && down_empty!="wallCooler"&& down_empty!="wallSofa" && down_empty!="wallPlant" &&down_empty!="locked_door_white"&&down_empty!="locked_door_black") {
      bottom=bottom-50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';

     }
}

function lefty(){
  get_coordinates();
    if (left_empty!="wall" && left_empty!="wallCooler"&& left_empty!="wallSofa" && left_empty!="wallPlant" &&left_empty!="locked_door_white"&&left_empty!="locked_door_black") {
    left=left-50;
    figure.style.left = left + 'px';
    figure.style.backgroundImage='URL("IMG/player_l.png")';
    }

}

function right(){
   get_coordinates();
      if (right_empty!="wall" && right_empty!="wallCooler"&& right_empty!="wallSofa" && right_empty!="wallPlant" &&right_empty!="locked_door_white"&&right_empty!="locked_door_black") {
      left=left+50;
      figure.style.left= left + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
      }

}
