
var canvas = document.getElementById("#img3");
/**function afficherCoords(evenement,img){
        console.log(
          "clientX value: " + evenement.clientX + "\n" +
          "clientY value: " + evenement.clientY + "\n"
        );
      }**/



function afficherCoords(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
}


//afficherCoords(canvas,e);