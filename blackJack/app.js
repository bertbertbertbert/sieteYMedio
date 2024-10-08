var cartaUnoJugador = document.getElementById('cartaUnoJugador');
var cartaDosJugador = document.getElementById('cartaDosJugador');
var cartaPedida = document.getElementById('cartaPedida');
var start = document.getElementById('start');
var cifraTotalJugador = document.getElementById('cifraTotalJugador');
var partidasGanadasJugador = document.getElementById('partidasGanadasJugador');
var cartaUnoBanca = document.getElementById('cartaUnoBanca');
var cartaDosBanca = document.getElementById('cartaDosBanca');
var cifraTotalBanca = document.getElementById('cifraTotalBanca');
var partidasGanadasBanca = document.getElementById('partidasGanadasBanca');
var pedirCarta=document.getElementById('pedirCarta');
var plantarse=document.getElementById('plantarse');
var pedirCartaBanca=document.getElementById('pedirCartaBanca');
var cartaPedidaBanca=document.getElementById('cartaPedidaBanca');


// Inicializar 
var baraja = [
    { nombre: '1 de oros', valor: 1 }, { nombre: '2 de oros', valor: 2 }, { nombre: '3 de oros', valor: 3 }, { nombre: '4 de oros', valor: 4 }, { nombre: '5 de oros', valor: 5 }, { nombre: '6 de oros', valor: 6 }, { nombre: '7 de oros', valor: 7 }, { nombre: '10 de oros', valor: 0.5 }, { nombre: '11 de oros', valor: 0.5 }, { nombre: '12 de oros', valor: 0.5 },
    { nombre: '1 de copas', valor: 1 }, { nombre: '2 de copas', valor: 2 }, { nombre: '3 de copas', valor: 3 }, { nombre: '4 de copas', valor: 4 }, { nombre: '5 de copas', valor: 5 }, { nombre: '6 de copas', valor: 6 }, { nombre: '7 de copas', valor: 7 }, { nombre: '10 de copas', valor: 0.5 }, { nombre: '11 de copas', valor: 0.5 }, { nombre: '12 de copas', valor: 0.5 },
    { nombre: '1 de espadas', valor: 1 }, { nombre: '2 de espadas', valor: 2 }, { nombre: '3 de espadas', valor: 3 }, { nombre: '4 de espadas', valor: 4 }, { nombre: '5 de espadas', valor: 5 }, { nombre: '6 de espadas', valor: 6 }, { nombre: '7 de espadas', valor: 7 }, { nombre: '10 de espadas', valor: 0.5 }, { nombre: '11 de espadas', valor: 0.5 }, { nombre: '12 de espadas', valor: 0.5 },
    { nombre: '1 de bastos', valor: 1 }, { nombre: '2 de bastos', valor: 2 }, { nombre: '3 de bastos', valor: 3 }, { nombre: '4 de bastos', valor: 4 }, { nombre: '5 de bastos', valor: 5 }, { nombre: '6 de bastos', valor: 6 }, { nombre: '7 de bastos', valor: 7 }, { nombre: '10 de bastos', valor: 0.5 }, { nombre: '11 de bastos', valor: 0.5 }, { nombre: '12 de bastos', valor: 0.5 },
];

var barajaMezclada = _.shuffle(baraja);
var cifraTotalJugadorMostrar=0;
var cifraTotalBancaMostrar=0;
var cifraNuevaTotalBanca=0;

start.addEventListener('click', empezarJuego);

function empezarJuego() {
    let primeraCartaJugador = barajaMezclada.pop();
    cartaUnoJugador.innerHTML = primeraCartaJugador.valor;

    let segundaCartaJugador = barajaMezclada.pop();
    cartaDosJugador.innerHTML = segundaCartaJugador.valor;

    let primeraCartaBanca = barajaMezclada.pop();
    cartaUnoBanca.innerHTML = primeraCartaBanca.valor;

    cifraTotalJugadorMostrar=primeraCartaJugador.valor+segundaCartaJugador.valor;
    cifraTotalJugador.innerHTML=cifraTotalJugadorUnoMostrar;

    start.disabled=true;
}

pedirCarta.addEventListener('click', ()=>{
    let nuevaCarta = barajaMezclada.pop();
     cartaPedida.innerHTML=nuevaCarta.valor;
     
     let cifraNuevaTotal=cifraTotalJugadorMostrar+=nuevaCarta.valor;
     cifraTotalJugador.innerHTML=cifraNuevaTotal;

     if(cifraNuevaTotal>21){
        alert('SACASTE UN '+cifraNuevaTotal+' TE HAS PASADO, LA BANCA GANAS');
     }
})

plantarse.addEventListener('click', ()=>{
    plantarse.disabled=true;});

    function turnoBanca(){
        let nuevaCarta = barajaMezclada.pop();
        cartaPedidaBanca.innerHTML=nuevaCarta.valor;
        cifraNuevaTotalBanca=cifraTotalBancaMostrar+=nuevaCarta.valor;
        cifraTotalBanca.innerHTML=cifraNuevaTotalBanca;
        if(cifraNuevaTotalBanca>=17){
            clearInterval(banca);
        }
    }

plantarse.addEventListener('click', ()=>{
    var banca=setInterval(turnoBanca, 1000);
});
