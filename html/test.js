const estacion=document.getElementsByClassName('estacion');
const paisaje=document.getElementsByClassName('paisaje');
const actividad=document.getElementsByClassName('actividad');
const compania=document.getElementsByClassName('compania');
const experiencia=document.getElementsByClassName('experiencia');

var opcionBarcelona=0;
var opcionRusia=0;
var opcionUsa=0;
var opcionColombia=0;

for(let opcion of estacion){
    if (opcion.ariaChecked) {

        switch(opcion.className){
            case barcelona:
            opcionBarcelona+parseInt(opcion.value);
            break;

            case rusia:
            opcionRusia+parseInt(opcion.value);
            break;ç

            case colombia:
            opcionColombia+parseInt(opcion.value);
            break;

            case usa:
            opcionUsa+parseInt(opcion.value);
            break;

            default:
                break;
        }

    }
}
for(let opcion of paisaje){
    if (opcion.ariaChecked) {

        switch(opcion.className){
            case barcelona:
            opcionBarcelona+parseInt(opcion.value);
            break;

            case rusia:
            opcionRusia+parseInt(opcion.value);
            break;ç

            case colombia:
            opcionColombia+parseInt(opcion.value);
            break;

            case usa:
            opcionUsa+parseInt(opcion.value);
            break;
            default:
                break;
        }
        }

    }

for(let opcion of actividad){
    if (opcion.ariaChecked) {

        switch(opcion.className){
            case barcelona:
            opcionBarcelona+parseInt(opcion.value);
            break;

            case rusia:
            opcionRusia+opcion.parseInt(opcion.value);
            break;ç

            case colombia:
            opcionColombia+opcion.parseInt(opcion.value);
            break;

            case usa:
            opcionUsa+opcion.parseInt(opcion.value);
            break;
            default:
                break;
        }
        }

    }

for(let opcion of compania){
    if (opcion.ariaChecked) {

        switch(opcion.className){
            case barcelona:
            opcionBarcelona+parseInt(opcion.value);
            break;

            case rusia:
            opcionRusia+parseInt(opcion.value);
            break;ç

            case colombia:
            opcionColombia+parseInt(opcion.value);
            break;

            case usa:
            opcionUsa+opcion.parseInt(opcion.value);
            break;
            default:
                break;
        }
        }

    }

 document.getElementById('click',  ()=>{
  
 })