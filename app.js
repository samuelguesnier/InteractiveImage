var point = function(){
	this.image = new Image();
	this.image.src = 'marker.png';
	this.hauteur = 20;
	this.largeur = 20;
	this.coordX = 0;
	this.coordY = 0;
	this.titre = "";
	this.description = "";
};
var points = new Array();

var c1 = document.getElementById("Canvas");
function imagePrincipale() {
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    var img = new Image();   // Crée un nouvel élément Image
    var marker = new Image();
    img.onload = function() {
    	c.width = img.width;
    	c.height = img.height;
    	ctx.drawImage(img,0,0);
  };
  
	img.src = 'image.jpeg'; 
	marker.src = 'marker.png';
   
	c.addEventListener('click',function(event){
    	var rect = c.getBoundingClientRect();
    	var x = event.clientX - rect.left;
    	var y = event.clientY - rect.top;
    	ctx.drawImage(marker,x-10,y-10,20,20);
    	console.log("x: " + x + " y: " + y);

	},false);
}

function enregisterMarkers(event){
	marker = new point();
}

function placerMarkers(argument) {
	// body...
}
