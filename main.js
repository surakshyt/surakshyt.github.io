
var box1 = document.getElementById("box1");

var box2 = document.getElementById("box2");

var height1= document.getElementById('container').offsetHeight;

var width1 = document.getElementById('container').offsetWidth;

console.log(height1);
console.log(width1);


function update(valuex,valuey){

let dx=0;
let dy=0;
let cx =0;
let cy =0;

let maxheight = height1-40;
let maxwidth = width1-40;

setInterval(() => {
	dx += valuex;
	cx += valuex;
	box1.style.top = dx +"px";
	box2.style.bottom = cx +"px";

	dy += valuey;
	cy += valuey;
	box1.style.left =dy +"px";
	box2.style.right =cy +"px";

	if (dx > maxheight || dx < 0) {
		valuex =valuex * -1;
		
	}
 

	if (dy >maxwidth || dy < 0) {
		valuey =valuey * -1;
		
	
	}
	
}, 10);

}

update(1, 1);




