var canvas;
var ctx;
var juegoIniciado=false;
var moverArriba=false;
var moverAbajo=false;
var moverIzquierda=false;
var moverDerecha=false;

var tiempoInicio;
var proximoSpawn=3;
var contadorSpawn=0;

var elementosActivos=[];

var imgPersonaje;
var imgVinilo;
var imgCasette;
var imgCD;
var imgDigital;

var fondoBasico=new Image();
var fondoVinilo=new Image();
var fondoCasette=new Image();
var fondoCD=new Image();
var fondoDigital=new Image();

var personajeUno=new Personaje(0,0);

var musicaActual=null;
var audioVinilo=new Audio("sonidos/sonidoVinilo.mp3");
var audioCasette=new Audio("sonidos/sonidoCassette.mp3");
var audioCD=new Audio("sonidos/sonidoCd.mp3");
var audioDigital=new Audio("sonidos/sonidoDigital.mp3");

audioVinilo.volume=0.3;
audioCasette.volume=0.3;
audioCD.volume=0.3;
audioDigital.volume=0.3;

audioVinilo.loop=true;
audioCasette.loop=true;
audioCD.loop=true;
audioDigital.loop=true;

function reproducirMusica(audio){
    if(musicaActual!=null){
        musicaActual.pause();
        musicaActual.currentTime=0
    }
    audio.currentTime=10;
    audio.play();
    musicaActual=audio;
}

function dibujar(){
    canvas=document.getElementById("canvas");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight*0.8;
    ctx=canvas.getContext("2d");
    tiempoInicio=Date.now();

    personajeUno.x=canvas.width/2-40;
    personajeUno.y=canvas.height-120;

    canvas.style.backgroundImage="url('imagenes/fondoBasico.png')";
    canvas.style.backgroundSize="cover";
    canvas.style.backgroundPosition="center";
    canvas.style.backgroundRepeat="no-repeat";

    imgPersonaje=new Image();
    imgPersonaje.src="imagenes/personaje.png";

    imgVinilo=new Image();
    imgVinilo.src="imagenes/vinilo.png";

    imgCasette=new Image();
    imgCasette.src="imagenes/cassette.png";

    imgCD=new Image();
    imgCD.src="imagenes/cd.png";

    imgDigital=new Image();
    imgDigital.src="imagenes/digital.png";

    fondoVinilo.src="imagenes/fondoVinilo.png";
    fondoCasette.src="imagenes/fondoCassette.png";
    fondoCD.src="imagenes/fondoCd.png";
    fondoDigital.src="imagenes/fondoDigital.png";

    setTimeout(function(){
        juegoIniciado=true;
    },3000);

    setInterval(function(){
    borrar();
    if(juegoIniciado){

        if(moverIzquierda){
            personajeUno.izquierda();
        }

        if(moverDerecha){
            personajeUno.derecha();
        }

        if(moverArriba){
            personajeUno.arriba();
        }

        if(moverAbajo){
            personajeUno.abajo();
        }

        let tiempo=(Date.now()-tiempoInicio)/1000;

        if(tiempo>=proximoSpawn){

            if(contadorSpawn==0){

                elementosActivos.push(
                    new Elemento(
                        Math.random()*(canvas.width-70),
                        -100,
                        "vinilo"
                    )
                );

            }else if(contadorSpawn==1){

                elementosActivos.push(
                    new Elemento(
                        Math.random()*(canvas.width-70),
                        -100,
                        "casette"
                    )
                );

            }else if(contadorSpawn==2){

                elementosActivos.push(
                    new Elemento(
                        Math.random()*(canvas.width-70),
                        -100,
                        "cd"
                    )
                );

            }else if(contadorSpawn==3){

                elementosActivos.push(
                    new Elemento(
                        Math.random()*(canvas.width-70),
                        -100,
                        "digital"
                    )
                );

            }else{

                let tipos=[
                    "vinilo",
                    "casette",
                    "cd",
                    "digital"
                ];

                let tipo=
                    tipos[
                        Math.floor(
                            Math.random()*4
                        )
                    ];

                elementosActivos.push(
                    new Elemento(
                        Math.random()*(canvas.width-70),
                        -100,
                        tipo
                    )
                );
            }

            contadorSpawn++;
            proximoSpawn+=6;
        }

        for(let i=0;i<elementosActivos.length;i++){

            elementosActivos[i].caer();
            elementosActivos[i].colision();

            if(elementosActivos[i].y>canvas.height){
                elementosActivos.splice(i,1);
                i--;
                continue;
            }

            switch(elementosActivos[i].tipo){

                case "vinilo":
                    elementosActivos[i].dibuja(imgVinilo);
                break;

                case "casette":
                    elementosActivos[i].dibuja(imgCasette);
                break;

                case "cd":
                    elementosActivos[i].dibuja(imgCD);
                break;

                case "digital":
                    elementosActivos[i].dibuja(imgDigital);
                break;
            }
}

    }else{

        ctx.font="40px Arial";
        ctx.fillStyle="black";
        ctx.textAlign="center";
        ctx.fillText(
            "Preparado...",
            canvas.width/2,
            canvas.height/2
        );
    }

    personajeUno.dibuja(imgPersonaje);

    },1000/60);
}

function Personaje(x,y){
    this.x=x;
    this.y=y;

    this.dibuja=function(img){
        ctx.drawImage(img,this.x,this.y,80,120);
    }

    this.izquierda=function(){
        this.x-=4;
        if(this.x<0){
            this.x=0;
        }
    }

    this.derecha=function(){
        this.x+=4;
        if(this.x>canvas.width-80){
            this.x=canvas.width-80;
        }
    }

    this.arriba=function(){
        this.y-=4;
        if(this.y<0){
            this.y=0;
        }
    }

    this.abajo=function(){
        this.y+=4;
        if(this.y>canvas.height-120){
            this.y=canvas.height-120;
        }
    }
}

function Elemento(x,y,tipo){
    this.x=x;
    this.y=y;
    this.tipo=tipo;

    this.caer=function(){
        this.y+=1;
    }

    this.dibuja=function(img){
        ctx.drawImage(img,this.x,this.y,70,70);
    }

    this.colision=function(){
        if(
            this.x<personajeUno.x+80 &&
            this.x+70>personajeUno.x &&
            this.y<personajeUno.y+120 &&
            this.y+70>personajeUno.y
        ){
            this.recolectar();
            elementosActivos.splice(
                elementosActivos.indexOf(this),
                1
            );
        }
    }

    this.recolectar=function(){
        switch(this.tipo){
            case "vinilo":
                canvas.style.backgroundImage="url('imagenes/fondoVinilo.png')";
                canvas.style.backgroundSize="cover";
                canvas.style.backgroundPosition="center";
                reproducirMusica(audioVinilo);
            break;

            case "casette":
                canvas.style.backgroundImage="url('imagenes/fondoCassette.png')";
                canvas.style.backgroundSize="cover";
                canvas.style.backgroundPosition="center";
                reproducirMusica(audioCasette);
            break;

            case "cd":
                canvas.style.backgroundImage="url('imagenes/fondoCd.png')";
                canvas.style.backgroundSize="cover";
                canvas.style.backgroundPosition="center";
                reproducirMusica(audioCD);
            break;

            case "digital":
                canvas.style.backgroundImage="url('imagenes/fondoDigital.png')";
                canvas.style.backgroundSize="cover";
                canvas.style.backgroundPosition="center";
                reproducirMusica(audioDigital);
            break;
        }
    }
}

function borrar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

document.addEventListener("keydown",function(e){

    switch(e.key){

        case "ArrowUp":
            moverArriba=true;
        break;

        case "ArrowDown":
            moverAbajo=true;
        break;

        case "ArrowLeft":
            moverIzquierda=true;
        break;

        case "ArrowRight":
            moverDerecha=true;
        break;
    }
});
document.addEventListener("keyup",function(e){

    switch(e.key){

        case "ArrowUp":
            moverArriba=false;
        break;

        case "ArrowDown":
            moverAbajo=false;
        break;

        case "ArrowLeft":
            moverIzquierda=false;
        break;

        case "ArrowRight":
            moverDerecha=false;
        break;
    }
});