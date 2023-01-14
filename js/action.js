var v = document.getElementsByTagName("audio")[0];
var sound = false;

var boton = document.getElementById("play");
boton.addEventListener("click", function(){
   if (!sound) {
       v.play();
       //this.innerHTML = "Pausar";
       sound = true;
   } 
   
});
var pa = document.getElementById("pause");
pa.addEventListener("click", function(){
if(sound == true) {
       v.pause();
       //this.innerHTML = "Play";

       sound = false;
   }
});
