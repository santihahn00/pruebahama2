let canvas;
let ctx;

let estadoJuego = "jugando";

let recolectados = 0;
let totalNecesario = 5;

let llevando = false;

let imgJugador = new Image();
let imgFinal = new Image();
let imgViniloParte = new Image();
let imgMariano = new Image();
let pistas=[]

let simbolos = [
    "♩",
    "♪",
    "♫",
    "𝄞",
    "𝄢"
];
let simbolosPantalla=[];
let objetoLlevado=null;
 let tiempoGlobal=0
let colores = [
    "red",
    "blue",
    "yellow",
    "green"
];
const TAM=30
let mapa = [

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

];

let jugador = {
    x: 870,
    y: 380,
    ancho: TAM,
    alto: TAM
};

let objetivo = {
    simbolo: "",
    color: "",
    x: 0,
    y: 0
};

window.onload = function(){

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = mapa[0].length * TAM;
    canvas.height = mapa.length * TAM + 80;

    imgJugador.src = "imagenes/jugador.png";
    imgFinal.src = "imagenes/final.png";
    imgViniloParte.src = "imagenes/viniloparte.png";
    imgMariano.src = "imagenes/mariano.png";
    
    pistas[0] = new Audio("sonido/musica1.mp3");
    pistas[1] = new Audio("sonido/musica2.mp3");
    pistas[2] = new Audio("sonido/musica3.mp3");
    pistas[3] = new Audio("sonido/musica4.mp3");
    pistas[4] = new Audio("sonido/musica5.mp3");

    nuevoObjetivo();

    setInterval(gameLoop,1000/30);
    generarSimbolosDecorativos()
};

function nuevoObjetivo(){

    objetivo.simbolo =
    simbolos[Math.floor(Math.random()*simbolos.length)];

    objetivo.color =
    colores[Math.floor(Math.random()*colores.length)];

    objetivo.x =
    50 + Math.random()*650;

    objetivo.y =
    75 + Math.random()*250;
}

function dibujarMapa(){

    for(let y=0;y<mapa.length;y++){

        for(let x=0;x<mapa[y].length;x++){

            if(mapa[y][x]==1){

                ctx.fillStyle="#444444";

            }else if(mapa[y][x]==3){
                ctx.fillStyle="#0080ff"
            }else{

                ctx.fillStyle="#000000";
            }

            ctx.fillRect(
                x*TAM,
                y*TAM+80,
                TAM,
                TAM
            );
        }
    }
}

function dibujarJugador(){

    ctx.drawImage(
        imgJugador,
        jugador.x,
        jugador.y,
        jugador.ancho,
        jugador.alto
    );

    if(objetoLlevado){

    ctx.fillStyle=objetoLlevado.color;
    ctx.font="30px Arial"
    ctx.fillText(
        objetoLlevado.simbolo,
        jugador.x+5,
        jugador.y-5
    );
}
}
function dibujarUI(){

    ctx.fillStyle="white";
    ctx.font="20px Arial";

    ctx.fillText(
        recolectados + "/" + totalNecesario,
        20,
        25
    );

    ctx.fillStyle="black";

    ctx.fillRect(
        280,
        0,
        180,
        60
    );

    ctx.fillStyle="white";

    ctx.fillText(
        "Buscar:",
        300,
        25
    );

    ctx.fillStyle=objetivo.color;

    ctx.font="40px Arial";

    ctx.fillText(
        objetivo.simbolo,
        390,
        35
    );

    ctx.fillStyle="white";

    ctx.fillText(
        "DEPÓSITO",
        canvas.width/2-50,
        870
    );
    ctx.fillStyle="white";
    ctx.font="20px Arial";

    ctx.fillText(
        "Digitalizados: " +
        recolectados +
        "/" +
        totalNecesario,
        20,
        30
    );
    ctx.fillText(
    "Restan: " +
    (totalNecesario-recolectados),
    20,
    60
);

ctx.drawImage(
    imgViniloParte,
    180,
    20,
    40,
    40
);
}
function generarSimbolosDecorativos(){

    simbolosPantalla=[];

    for(let i=0;i<60;i++){

        let fila;
        let columna;

        do{

            fila=
            Math.floor(Math.random()*mapa.length);

            columna=
            Math.floor(Math.random()*mapa[0].length);

        }while(mapa[fila][columna]!=0);

        simbolosPantalla.push({

            simbolo:
            simbolos[Math.floor(Math.random()*simbolos.length)],

            color:
            colores[Math.floor(Math.random()*colores.length)],

           x:
            columna*TAM + TAM/2 - 10,

            y:
            fila*TAM + 80 + TAM/2 + 10

        });
    }
    let fila;
        let columna;

        do{

            fila=Math.floor(Math.random()*mapa.length);
            columna=Math.floor(Math.random()*mapa[0].length);

        }while(mapa[fila][columna]!=0);

        simbolosPantalla.push({

            simbolo: objetivo.simbolo,
            color: objetivo.color,

            x: columna*TAM+TAM/2-10,
            y: fila*TAM+50 + TAM/2 +10

        });
}
function dibujarSimbolosDecorativos(){

    for(let s of simbolosPantalla){

        ctx.fillStyle=s.color;

        ctx.font="30px Arial";

        ctx.fillText(
            s.simbolo,
            s.x,
            s.y
        );
    }
}

function recolectar(){

    if(llevando) return;

    for(let i=0;i<simbolosPantalla.length;i++){

        let s=simbolosPantalla[i];

        let cerca=

        s.x<jugador.x+40 &&
        s.x+40>jugador.x &&

        s.y<jugador.y+40 &&
        s.y+40>jugador.y;

        if(cerca){

            objetoLlevado={

                simbolo:s.simbolo,

                color:s.color

            };

            simbolosPantalla.splice(i,1);

            llevando=true;

            return;
        }
    }
}

function depositar(){

    if(!llevando) return;

    let columna=Math.floor(jugador.x/TAM);

    let fila=Math.floor((jugador.y-80)/TAM);

    if(mapa[fila][columna]==3){

        llevando=false;

        if(

            objetoLlevado.simbolo==objetivo.simbolo

            &&

            objetoLlevado.color==objetivo.color

        ){

            recolectados++;

if(recolectados==1){

    pistas[0].loop=true;
    pistas[0].play();

}else if(recolectados<=5){

    tiempoGlobal =
    pistas[recolectados-2].currentTime;

    pistas[recolectados-1].currentTime =
    tiempoGlobal;

    pistas[recolectados-1].loop=true;

    pistas[recolectados-1].play();
}
}

            console.log("Correcto");

        }else{

            console.log("Incorrecto");
        }

        objetoLlevado=null;

        if(recolectados>=totalNecesario){

    for(let i=0;i<4;i++){
        pistas[i].pause();
    }

    estadoJuego="final";

}else{

    nuevoObjetivo();
    generarSimbolosDecorativos();
}
}
function chocarPared(x,y){

    let columna=Math.floor(x/TAM);

    let fila=Math.floor((y-80)/TAM);

    if(
        fila<0 ||
        columna<0 ||
        fila>=mapa.length ||
        columna>=mapa[0].length
    ){
        return true;
    }

    if(mapa[fila][columna]==1){
        return true;
    }

    return false;
}

function pantallaFinal(){

    ctx.fillStyle="black";
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle="white";
    ctx.font="50px Arial";

    ctx.fillText(
        "Lo restauraste",
        canvas.width/2-160,
        80
    );

    let centroX=350;
    let centroY=350;

    for(let i=0;i<5;i++){

        ctx.save();

        ctx.translate(
            centroX,
            centroY
        );

        ctx.rotate(
            (Math.PI*2/5)*i
        );

        ctx.drawImage(
            imgViniloParte,
            -100,
            -100,
            200,
            200
        );

        ctx.restore();
    }

    ctx.drawImage(
        imgMariano,
        650,
        180,
        350,
        350
    );
}
function gameLoop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(estadoJuego=="jugando"){

        dibujarMapa();
        dibujarSimbolosDecorativos()
        dibujarJugador();
        dibujarUI();
    }

    if(estadoJuego=="final"){

        pantallaFinal();
    }
}

document.addEventListener("keydown",function(e){

    switch(e.key){

        case "w":

            if(!chocarPared(
                jugador.x,
                jugador.y-TAM
            )){
                jugador.y-=TAM;
            }

        break;

        case "s":

            if(!chocarPared(
                jugador.x,
                jugador.y+TAM
            )){
                jugador.y+=TAM;
            }

        break;

        case "a":

            if(!chocarPared(
                jugador.x-TAM,
                jugador.y
            )){
                jugador.x-=TAM;
            }

        break;

        case "d":

            if(!chocarPared(
                jugador.x+TAM,
                jugador.y
            )){
                jugador.x+=TAM;
            }

        break;

        case " ":

            if(!llevando){

                recolectar();

            }else{

                depositar();
            }

        break;
    }
});