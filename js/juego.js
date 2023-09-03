// VARIABLE GLOBAL
var iniciadoMarcado=false;
var  adyacentes=[];
var tamanoPanel;


//js para el juego

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function rellenarFormularioUsuario(){
    document.getElementById("nick").value=nick;
    document.getElementById("avatarImg").src=avatarImg;
    tamanoPanel=parseInt(tamano);
}

function pintarPanelJuego(){
    document.getElementById("juego").style.gridTemplateColumns="repeat("+tamano+", 1fr)"
    document.getElementById("juego").style.gridTemplateRows="repeat("+tamano+", 1fr)"

    //Creacion cuadrados de manera automatica
    let items="";
    let color=["rojo", "verde"]
    letcolorRnd=0;
    for (let index = 0; index < (parseInt(tamano)*parseInt(tamano)); index++) {
        if(index%2>0) colorRnd=getRandomInt(2);
        colorRnd=getRandomInt(2);
        items+=`<div class="containerItem"><div id= "${index}" class="item ${color[colorRnd]}"></div></div>`;
    }
    document.getElementById("juego").innerHTML=items;
}

// calcular ADYACENTES

function calcularAdyacentes(idMarcado){
    adyacentes=[];
    //adyacente sup
    if((idMarcado-tamanoPanel)>=0) adyacentes.push(idMarcado-tamanoPanel);
    //adyacente inf
    if((idMarcado-tamanoPanel)<(tamanoPanel*tamanoPanel)) adyacentes.push(idMarcado+tamanoPanel);
    //adyacente izq
    if((idMarcado%tamanoPanel)>0) adyacentes.push(idMarcado-1);
    //adyacente der
    if(((idMarcado+1)%tamanoPanel)>0) adyacentes.push(idMarcado+1);
}

//Añadir elementos al juego

function programarEventosJuego(){
    const items=document.getElementsByClassName('item');
    for (let item of items) {
        item.addEventListener('mousedown', comenzarMarcar);
        item.addEventListener('mouseover', continuarMarcando);
    }

    document.addEventListener('mouseup', finalizarMarcado);
}

////////////////////////////////FUNCIONES JUEGO. 
//iniciar marcado de los dots

function comenzarMarcar(event){
    let item=event.target;
    let containerItem=event.target.parentElement;
    if (item.classList.contains('rojo')) containerItem.classList.add('rojo');
    else containerItem.classList.add('verde');

    if(!iniciadoMarcado) iniciadoMarcado=true;
}

//Funciones juego. continuar marcado de los dots

function continuarMarcando(event){
    if(iniciadoMarcado){
        let item=event.target;
        let containerItem=event.target.parentElement;
        if (item.classList.contains('rojo')) containerItem.classList.add('rojo');
        else containerItem.classList.add('verde');
    }
}

//Funciones juego. finalizar marcado de los dots

function finalizarMarcado(event){
    iniciadoMarcado=false;
}


///////////////////////////////////////////////////////////////////////////////////

//Capturamos datos usuario
getDatosUsuario();

//Comprobamos datos
if(!comprobacionDatosUsuario()) location="index.html";

//rellenar form
rellenarFormularioUsuario();
pintarPanelJuego();
programarEventosJuego();

