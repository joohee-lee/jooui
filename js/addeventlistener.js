
/* Event Listeners */
//syntax : element.addEventListeners(event, function, useCapture);
//syntax : element.attachEvent(evnet, function);
// IE 9 이하 / on + event 

//addEventListener / attachEvent
function addEvent(el, event, funct){

	if(window.addEventListener){
		return el.addEventListener( event, funct, false);
	}else if (window.attachEvent){
		//add for Internet Explorer previous to IE9
		return el.attachEvent( 'on'+event, funct );
	}
}

window.onload = addEvent;

//example
/*

addEvent(
	document.getElementById('myElement'),
	'click',
	function(){ alert('hi');}
);

// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// add event listener to table
var el = document.getElementById("outside");

//el.addEventListener("click", modifyText, false);
addEvent(el, 'click', modifyText);

*/