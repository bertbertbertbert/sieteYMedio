
function mostrarHora(){
let ahora = new Date();
document.getElementById('hora').innerHTML=ahora.getHours().toString().padStart(2, '0');
document.getElementById('minutos').innerHTML=ahora.getMinutes().toString().padStart(2, '0');
document.getElementById('segundos').innerHTML=ahora.getSeconds().toString().padStart(2, '0');
}
setInterval(mostrarHora, 1000);


function mostrarFecha(){
    let fecha=new Date();
    document.getElementById('dia').innerHTML=fecha.getDate();
    document.getElementById('mes').innerHTML=fecha.getMonth()+1;
    document.getElementById('año').innerHTML=fecha.getFullYear();
}
setInterval(mostrarFecha, 1000);