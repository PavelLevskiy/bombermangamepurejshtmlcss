function tableCreate(){
    var body = document.body;
    var tbl  = document.createElement('table');
    tbl.style.width  = '1300px';
    tbl.style,height = '600px';
    tbl.style.border = '1px solid black';
    tbl.style.borderCollapse = 'collapse';
    var num=0;
    var bomber = document.createElement('div');
    var butWidth = document.getElementById('id').offsetHeight;
    var td = document.getElementsByTagName('td')



//Создаем таблицу
 function pow(){
 			    
 				var tr  = document.createElement('tr');
				
 				tbl.appendChild(tr);

 				    for (var i = 0; i<=19 ; i++) {
 					var td = document.createElement('td');
 					td.style.width = 50+'px';
 				    td.style.height = 50+'px';
 				    td.style.border = '1px solid black';
 				    td.innerHTML = num++;
 				    //td.id = `id${num}`;
 					tr.appendChild(td);       

    				}
    
    		
    			body.appendChild(tbl);
    		}
    		for (var i = 0; i <=9; i++) {
    			
    			pow();

    		}

    			
 function color(){
    		var tabtd = document.getElementsByTagName('td');
    		for (var i = 180; i < tabtd.length; i++) {
    			tabtd[i].style.background = 'green';
    		
    		}


    		for (var i = 0; i <=19; i++) {
    			tabtd[i].style.background = 'green';
    			
    		}
    	     for (var i = 0; i < tabtd.length; i=i+20) {
    			tabtd[i].style.background = 'green';
    			
    		}
    		for (var i = 19; i < tabtd.length; i=i+20) {
    			tabtd[i].style.background = 'green';
    			
    		}

    		for (var i = 42; i < tabtd.length; i=i+2) {
    			if (i>60&&i<80){
    				tabtd[i].style.background = 'none';
    			}

    			 else if (i>100&&i<120) {
    				tabtd[i].style.background = 'none';
    			}
    			else if (i>140&&i<160){
    				tabtd[i].style.background = 'none';
    			}
    			else tabtd[i].style.background = 'green';
    		}


    		}	


 function block(){
    		// определить массив с блоками
    		// создать цикл где случайным случаем заполнятся все 
    		// Блоки у которых нет зеленого бекграунда
    		var tabtd = document.getElementsByTagName('td');
    		for (var i = 0; i < tabtd.length; i++) {

    			if (tabtd[i].style.background == 'green'){
    				
    			}
    			else {
                  
                    var rand = coinToss();
                    
                    if(rand == true){
                        tabtd[i].style.background = 'blue';
                    }
                        else {

                            tabtd[i].className += "massFree";
                           
                                
                                
                            }
                            
                           

                        }



                  
                    }

    			}
    		
    		

function coinToss() {
                    return (Math.floor(Math.random() * 2) === 0);
                        }

// переделать енеми болл

function enemyBoll(){
  var c = document.querySelectorAll('.massFree');
  var rand = 0;
  for (var i = 0; i < 4; i++) {
   
        rand = (Math.floor(Math.random()*50));
      
         
      }
     
 }

function bomber(){

}
//определить позицию бомбера (обнаружить координаты 21 блока и сделать бомбера через див) 
// взять  переменную от 21 блока и приенить к координатам дива Бомбера                                
// offsetlef offsettop 
// задать ему такиеже высоту и ширину


function bmMove(){




var left = td[21].offsetLeft;
var down = butWidth + td[21].offsetTop;

window.onkeydown = function(events){
  


  if (this.event.keyCode == 39) {
         if(left > td[37].offsetLeft+1 ){
            left=left;
         } else
          left=left+td[21].offsetWidth;
          //! через сет тайммаут чтобы было движение.
          bomber.style.left = left + 'px';
    } else if (this.event.keyCode == 37) {
          if (left < td[21].offsetWidth+1) {
            left = td[21].offsetWidth;
          } else {
            left=left-td[21].offsetWidth;
            bomber.style.left = left + 'px';
          }



    } else if (this.event.keyCode == 40) {
          if (down>td[161].offsetTop) {
             down=down;
          } else {
            down=down+td[21].offsetHeight;
            bomber.style.top = down + 'px';
          }
    } else if (this.event.keyCode == 38) {
        if (down<(butWidth + (td[21].offsetTop*2))) {
            down=butWidth + td[21].offsetTop;
        } else {
          down=down-td[21].offsetHeight;
          bomber.style.top = down + 'px';
        }
          
    } else if (this.event.keyCode == 32) {
          
         dropBomb();


          
      }



}

}


function dropBomb(){

    var bomb = document.createElement('div');


bomb.style.width = bomber.offsetWidth + 'px';
bomb.style.height = bomber.offsetHeight + 'px';
bomb.style.top =  bomber.offsetTop + 'px';
bomb.style.left = bomber.offsetLeft + 'px';
bomb.style.background = 'black';
bomb.style.position = 'absolute';

body.appendChild(bomb);

console.log(bomb);


}

function createBomberman(){

bomber.style.width = td[21].offsetWidth - 8 + 'px';
bomber.style.height = td[21].offsetHeight + 'px';
bomber.style.top = butWidth + td[21].offsetTop + 'px';
bomber.style.left = td[21].offsetLeft + 'px';
bomber.style.backgroundImage = "url('general.png')";
bomber.style.backgroundRepeat = 'no-repeat';
bomber.style.backgroundSize = '1075'+'%'
bomber.style.backgroundPositionX = 16 + 'px';
bomber.style.backgroundPositionY = 0 + 'px';
bomber.style.position = 'absolute';
bomber.style.transitionProperty = 'Left';
bomber.style.transitionDuration = 4 +'s';
body.appendChild(bomber);
}


createBomberman();
bmMove();			
enemyBoll();   			
color();
block();
}
     
       
                   
                   
                        
                        
                   




    

