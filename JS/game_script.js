var left = 0;
var bottom = 0;

window.onkeydown = function(){

var figure=document.getElementById('player');


 if(event.keyCode==37){
    left=left-50;
    figure.style.left = left + 'px';
    figure.style.backgroundImage='URL("IMG/player_l.png")';

  }
    else if(event.keyCode==39){
      left=left+50;
      figure.style.left= left + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
    }
   
    else if(event.keyCode==40){
      bottom=bottom-50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
    
    }

    else if(event.keyCode==38){
      bottom=bottom+50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_l.png")';
    }

}
 


function up(){
	bottom=bottom+50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_l.png")';
}

function down(){
	bottom=bottom-50;
      figure.style.bottom= bottom + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
}

function lefty(){
	left=left-50;
    figure.style.left = left + 'px';
    figure.style.backgroundImage='URL("IMG/player_l.png")';
}

function right(){
	left=left+50;
      figure.style.left= left + 'px';
      figure.style.backgroundImage='URL("IMG/player_r.png")';
}