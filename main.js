var left = 0;
var top = 0;
var down = 0;
var div = document.getElementById('i1');
window.onkeydown = function(events){
  


  if (this.event.keyCode == 39) {
  	     if(left > 400 ){
  	     	left=left;
  	     } else
  		  left=left+50;
          div.style.left = left + 'px';
  	} else if (this.event.keyCode == 37) {
  		  if (left < 50) {
  		  	left = 0
  		  } else {
  		  	left=left-50;
            div.style.left = left + 'px';
  		  }
  	} else if (this.event.keyCode == 40) {
  		  if (down>400) {
  		     down=down;
  		  } else {
  		  	down=down+50;
            div.style.top = down + 'px';
  		  }
  	} else if (this.event.keyCode == 38) {
  		if (down<50) {
  			down=0;
  		} else {
  		  down=down-50;
          div.style.top = down + 'px';
  		}
  		  
  	} else if (this.event.keyCode == 32) {
  		  
          div.style.borderRadius = 50+'%';
      }


console.log(i1.style.top);
};