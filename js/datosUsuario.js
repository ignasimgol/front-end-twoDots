
var nick;


function datosUsuario(nick){

    sessionStorage.setItem('nick',nick.value);

}

function getDatosUsuario(){
    let nick = sessionStorage.getItem('nick');
    console.log(nick);
}

function comprobacionDatosUsuario(){
    if(nick==null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}

//local storage

function historicoUsuario(nick){
    let historicoStorage=localStorage.getItem('historico');
    let historico;
    if(historicoStorage==null){
        historico=[];
    }else{
        historico=JSON.parse(historicoStorage);
    }
    let registroUsuario={
        usuario:nick.value,
        fecha:Date.now()
    }
    historico.push(registroUsuario);
    localStorage.setItem('historico',JSON.stringify(historico));
}