var Point = function(){
	this.image = new Image();
	this.image.src = 'marker.png';
	this.hauteur = 20;
	this.largeur = 20;
	this.coordX = 0;
	this.coordY = 0;
	this.titre = "";
	this.description = "";
	this.enPlace = false;
};
var listePoints = new Array();
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
var rect = c.getBoundingClientRect();

function imagePrincipale() {

    var img = new Image();   // Crée un nouvel élément Image
	img.src = 'image.jpeg'; 
    img.onload = function() {
    	c.width = img.width;
    	c.height = img.height;
    	ctx.drawImage(img,0,0);
  };

}

c.addEventListener('click',enregisterPoint,false); //lors du click sur l'image principale

function enregisterPoint(event){
	let point = new Point();
	point.coordX = event.clientX - rect.left;
	point.coordY = event.clientY - rect.top;
	listePoints.push(point);
	placerPoints(listePoints);
}

function placerPoints(liste) {
	for(let i = 0;i<liste.length;i++){

		if (liste[i].enPlace === false){
				let point = liste[i];
				dessinerPoint(point);
				
		}
	}
}

function dessinerPoint(point){
		let x = point.coordX;
		let y = point.coordY;
		let h = point.hauteur;
		let l = point.largeur;
		point.image.onload = function() {
    		ctx.drawImage(point.image,x-(h/2),y-(l/2),h,l);
  		};
    	
    	point.enPlace = true;
}
