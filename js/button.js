// document. getElementById("play"). click();

function mostrarBoton() {
    document.getElementById('pause').style.display = 'block';
    document.getElementById('text').style.display = 'block';
    document.getElementById('play').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
 

}


function ocultarBoton() {
    document.getElementById('pause').style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('play').style.display = 'block';
    document.getElementById('text2').style.display = 'block';


}