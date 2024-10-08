var jugadorUno = document.getElementById('jugadorUno');
var jugadorDos = document.getElementById('jugadorDos');
var cartaJugadorUno = document.getElementById('cartaJugadorUno');
var totalJugadorUnoElement = document.getElementById('totalJugadorUno');
var cartaJugadorDos = document.getElementById('cartaJugadorDos');
var totalJugadorDosElement = document.getElementById('totalJugadorDos');
var vidasJugadorUno=document.getElementById('vidasJugadorUno');
var vidasJugadorDos=document.getElementById('vidasJugadorDos');
var btnStart = document.getElementById('start');
var btnReiniciar = document.getElementById('reiniciar');

//iniciaciones
var totalJugadorUno = 0;
var totalJugadorDos = 0;
jugadorUno.disabled = true;
jugadorDos.disabled = true;
vidasJugadorUno.innerHTML=5;
vidasJugadorDos.innerHTML=5;
alert(vidasJugadorUno--);

var baraja = [
{ nombre: '1 de oros', valor: 1 }, { nombre: '2 de oros', valor: 2 }, { nombre: '3 de oros', valor: 3 }, { nombre: '4 de oros', valor: 4 }, { nombre: '5 de oros', valor: 5 }, { nombre: '6 de oros', valor: 6 }, { nombre: '7 de oros', valor: 7 }, { nombre: '10 de oros', valor: 0.5 },{ nombre: '11 de oros', valor: 0.5 }, { nombre: '12 de oros', valor: 0.5 }, 
{ nombre: '1 de copas', valor: 1 }, { nombre: '2 de copas', valor: 2 }, { nombre: '3 de copas', valor: 3 }, { nombre: '4 de copas', valor: 4 }, { nombre: '5 de copas', valor: 5 }, { nombre: '6 de copas', valor: 6 }, { nombre: '7 de copas', valor: 7 }, { nombre: '10 de copas', valor: 0.5 },{nombre: '11 de copas', valor: 0.5 }, { nombre: '12 de copas', valor: 0.5 },
{ nombre: '1 de espadas', valor: 1 }, { nombre: '2 de espadas', valor: 2 }, { nombre: '3 de espadas', valor: 3 }, { nombre: '4 de espadas', valor: 4 }, { nombre: '5 de espadas', valor: 5 }, { nombre: '6 de espadas', valor: 6 }, { nombre: '7 de espadas', valor: 7 }, { nombre: '10 de espadas', valor: 0.5 },{nombre: '11 de espadas', valor: 0.5 }, { nombre: '12 de espadas', valor: 0.5 },
{ nombre: '1 de bastos', valor: 1 }, { nombre: '2 de bastos', valor: 2 }, { nombre: '3 de bastos', valor: 3 }, { nombre: '4 de bastos', valor: 4 }, { nombre: '5 de bastos', valor: 5 }, { nombre: '6 de bastos', valor: 6 }, { nombre: '7 de bastos', valor: 7 }, { nombre: '10 de bastos', valor: 0.5 },{nombre: '11 de bastos', valor: 0.5 }, { nombre: '12 de bastos', valor: 0.5 },
];

function mezclarYSacarCarta() {
  var barajaMezclada = _.shuffle(baraja);
  var carta = barajaMezclada.pop();
  return carta;
}

btnStart.addEventListener('click', () => {
  jugadorUno.disabled = false;
  jugadorDos.disabled = true;
  btnStart.disabled = true;
  totalJugadorUno = 0;
  totalJugadorDos = 0;
  totalJugadorUnoElement.innerHTML = '0';
  totalJugadorDosElement.innerHTML = '0';
});

jugadorUno.addEventListener('click', () => {
  let carta = mezclarYSacarCarta();
  totalJugadorUno += carta.valor;
  cartaJugadorUno.innerHTML = carta.nombre;
  totalJugadorUnoElement.innerHTML = totalJugadorUno.toFixed(1);
  if (totalJugadorUno > 7.5) {
    alert('Jugador Uno se ha pasado con un total de ' + totalJugadorUno + '. ¡Gana Jugador Dos!');
    reiniciar();
  }
});

document.getElementById('plantarseJugadorUno').addEventListener('click', () => {
  jugadorUno.disabled = true;
  jugadorDos.disabled = false;
});

jugadorDos.addEventListener('click', () => {
  let carta = mezclarYSacarCarta();
  totalJugadorDos += carta.valor;
  cartaJugadorDos.innerHTML = carta.nombre;
  totalJugadorDosElement.innerHTML = totalJugadorDos.toFixed(1);
  if (totalJugadorDos > 7.5) {
    alert('Jugador Dos se ha pasado con un total de ' + totalJugadorDos + '. ¡Gana Jugador Uno!');
    reiniciar();
  }
});

document.getElementById('plantarseJugadorDos').addEventListener('click', () => {
  if (totalJugadorUno > totalJugadorDos && totalJugadorUno <= 7.5) {
    alert('¡Jugador Uno es el ganador con un total de ' + totalJugadorUno + '!');
  } else if (totalJugadorDos > totalJugadorUno && totalJugadorDos <= 7.5) {
    alert('¡Jugador Dos es el ganador con un total de ' + totalJugadorDos + '!');
  } else {
    alert('Empate');
  }
  reiniciar();
});

function reiniciar() {
  jugadorUno.disabled = true;
  jugadorDos.disabled = true;
  btnStart.disabled = false;
  totalJugadorUno = 0;
  totalJugadorDos = 0;
  cartaJugadorUno.innerHTML = '#';
  cartaJugadorDos.innerHTML = '#';
  totalJugadorUnoElement.innerHTML = '0';
  totalJugadorDosElement.innerHTML = '0';
}
btnReiniciar.addEventListener('click', reiniciar);