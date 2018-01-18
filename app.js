var Point = function(){
	this.hauteur = 20;
	this.largeur = 20;
	this.coordX = 0;
	this.coordY = 0;
	this.titre = "";
	this.description = "";
	this.enPlace = false;
	this.onclick;
};
var listePoints = new Array();
var rect = C1.getBoundingClientRect();

C1.addEventListener('click',enregisterPoint,false); //lors du click sur l'image principale


function divImage(){
	let img = document.getElementById('img');
	let div = document.getElementById('C1');
	div.style.height = img.ClientHeight;
	div.style.width = img.ClientWidth;
}

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
				placerBouton(point);
				
		}
	}
}

function placerBouton(point){
		let x = point.coordX;
		let y = point.coordY;
		let h = point.hauteur;
		let l = point.largeur;
    	point.enPlace = true;
    	/*let bouton = document.createElement("BUTTON");
    	bouton.style.position="absolute";
    	bouton.style.left = x+"px";
    	bouton.style.top = y+"px";
    	bouton.setAttribute("class","bPoint");
    	document.getElementById('C1').appendChild(bouton);  */
    	let bouton = document.createElement("IMG");
    	bouton.style.content = "url(marker.png)";
    	bouton.style.height = "20px";
    	bouton.style.width = "20px";
       	bouton.style.position="absolute";
    	bouton.style.left = x+"px";
    	bouton.style.top = y+"px";
    	bouton.style.zIndex="0";
    	bouton.setAttribute("class","bPoint");
    	document.getElementById('C1').appendChild(bouton);

}
