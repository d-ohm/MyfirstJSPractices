function mostrarMensaje1(){
alert('Bienvenido al curso JavaScript de aprenderaprogramar.com');
}

function mostrarMensaje2(){
alert('Ha hecho click sobre el párrafo inferior');
}

// Ejemplo de funcion con parametros sin return
function mostrarImporteConImpuestos(importeSinImpuestos) { 

var importeConImpuestos; importeConImpuestos = importeSinImpuestos * 1.21;

msg = 'Importe antes de impuestos: '+ importeSinImpuestos + '\n\n';

alert(msg + 'Importe con impuestos: '+ importeConImpuestos + '\n\n');

}

// Ejemplo de funcion con parametros con return
function obtenerImporteConImpuestos(importeSinImpuestos) { 

var importeConImpuestos; importeConImpuestos = importeSinImpuestos * 1.21;

return importeConImpuestos;

}

//Ejemplo de una funcion llamando a otra funcion
function mostrarImporteConImpuestos2(importeSinImpuestos) {

var msg; msg = 'Ejemplo. Importe antes de impuestos: '+ importeSinImpuestos + '\n\n';

alert(msg + 'Importe con impuestos: '+ obtenerImporteConImpuestos(importeSinImpuestos) + '\n\n');

}