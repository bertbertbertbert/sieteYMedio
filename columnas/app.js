
document.getElementById('btnI').addEventListener('click', ()=>{document.getElementById('columnaI').classList.toggle('displayNone')});
document.getElementById('btnD').addEventListener('click', ()=>{document.getElementById('columnaD').classList.toggle('displayNone')});

var acumularIncremento=0;
function incrementarContador(){
acumularIncremento++;
document.getElementById('contador').innerHTML=acumularIncremento;
}
const intervalID0=setInterval(incrementarContador, 1000);



function mostrarTimeOut(){
    document.getElementById('timeOut').innerHTML=('este es un mensaje que se muetra despues de 2 segundos');
}

const setTimeOut=setTimeout(mostrarTimeOut, 2000);