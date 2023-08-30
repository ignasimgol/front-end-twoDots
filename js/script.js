/* comprobacion formulario */

// Inicializacion Variables, DOM

const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");
const error=document.getElementById("error");

//Comprobar si hay algun error de juego.html

if(sessionStorage.getItem('error')!=null)
{
    error.innerText=sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}


//Funciones de evento
function comprobarForm(event){
    //Comprobar Cambios
    if(nickInput.value.match(/(?<!\S)[0-9]/))
    {
        nickInput.focus();
        event.preventDefault();
        error.innerText="El campo de NICK no puede comenzar con un numero";
        return false;
    }else if(tamanoInput.value=="0"){
        tamanoInput.focus();
        event.preventDefault();
        error.innerText="Debes seleccionar un tamaño";
        return false;
    }
    //Informacion es correcta
    datosUsuario(nickInput);
    historicoUsuario(nickInput); 
    return true;

}

//Inicio de carga de eventos
formEntrada.addEventListener('submit',comprobarForm);