const boton = document.querySelector('#boton');
const archivo = document.querySelector('#archivo');
const mensajeria = document.querySelector('#mensajeria');
let documento = document.querySelector('#documento');



function iniciarApp() {
    boton.disabled = true;
    boton.classList.add('deshabilitado');
    archivo.disabled = true;
    archivo.classList.add('deshabilitado');
}

function validarDni(e) {
    const valor = e.target.value;

    if (valor === "" || isNaN(valor)) {
        mostrarMensaje("Ingrese un numero valido", "error");
        iniciarApp();
    } else if (Number(valor)) {

        archivo.disabled = false;
        archivo.classList.remove('deshabilitado');
    }

}




function mostrarMensaje(mensaje, tipo) {

    const parrafoMensaje = document.createElement('P');
    parrafoMensaje.textContent = mensaje

    mensajeria.classList.add('caja-mensajeria');
    if (tipo === "error") {

        mensajeria.classList.add('error');

    } else if (tipo === "envio") {
        mensajeria.classList.add('envio');
    }


    mensajeria.appendChild(parrafoMensaje)

    setTimeout(() => {
        parrafoMensaje.remove();
        mensajeria.classList.remove('caja-mensajeria');
    }, 3000);


}

function validarArchivo() {

    let nombre = archivo.value;
    let extencionArchivo = /(.xlsx|.xlsm|.xlsb|.xltx|.xltm|.xls|.xml|.xlam|.xla|.xlw|.xlr)$/i;

    if (!extencionArchivo.exec(nombre)) {
        archivo.value = '';
        mostrarMensaje("Extencion no Valida", "error");
        return false;
    } else {
        boton.disabled = false;
        boton.classList.remove('deshabilitado');
    }



}

function enviarArchivo(e) {
    e.preventDefault();
    mostrarMensaje("El Archivo ha sido enviado", "envio");

}

function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    documento.addEventListener('change', validarDni);
    boton.addEventListener("click", enviarArchivo);

}
eventListener();