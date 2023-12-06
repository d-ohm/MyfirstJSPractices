// Ejemplo de funcion multiparametrica con return
function obtenerImporteConImpuestos(importeSinImpuestos, tipoProducto) { 

var importeConImpuestos; 
if (tipoProducto == 1) 
{importeConImpuestos = importeSinImpuestos * 1.21;}
else if (tipoProducto == 2) 
{importeConImpuestos = (importeSinImpuestos * 0.110)*10;}	
else 
{importeConImpuestos = importeSinImpuestos * 1.05;}

return importeConImpuestos;

}

function mostrarImporteConImpuestos(importeSinImpuestos, tipoProducto) {

tipoProducto= prompt("Elija un tipo de producto; 1, 2 ó 3: ");
while (tipoProducto=="") {
	tipoProducto = prompt("Introduzca un numero, elija un tipo de producto; 1, 2 ó 3: ");
}

tipoProducto = Number(tipoProducto);

while (tipoProducto > 3 || tipoProducto < 1) {
	tipoProducto = prompt("El tipo de producto elejido no es válido, elija un tipo de producto; 1, 2 ó 3: ");
	tipoProducto = Number(tipoProducto);
 }

importeSinImpuestos = prompt("Introduzca el importe sin impuestos: ");

importeSinImpuestos = Number(importeSinImpuestos);

var msg; msg = 'Importe antes de impuestos: '+ importeSinImpuestos + '\n\n' + 'Tipo de producto elejido: ' + tipoProducto + '\n\n';

alert(msg + 'Importe con impuestos: '+ obtenerImporteConImpuestos(importeSinImpuestos, tipoProducto) + '\n\n');

}

//Ejemplo de Funcion con parametros con return de objeto complejo

function obtenerImporteConImpuestos2(importeSinImpuestos2) { 

 

var importeConImpuestos2; importeConImpuestos2 = [];

importeConImpuestos2[1] = (importeSinImpuestos2 * 0.121)*10;
importeConImpuestos2[2] = (importeSinImpuestos2 * 0.110)*10;	
importeConImpuestos2[3] = (importeSinImpuestos2 * 0.105)*10;



var msg; msg = 'Importe antes de impuestos: '+ importeSinImpuestos2 + '\n\n';
msg = msg + 'Resultado [0]: '+ importeConImpuestos2[0]+'\n\n'; 
msg = msg + 'Resultado [1]: '+ importeConImpuestos2[1]+'\n\n'; 
msg = msg + 'Resultado [2]: '+ importeConImpuestos2[2]+'\n\n';
msg = msg + 'Resultado [3]: '+ importeConImpuestos2[3]+'\n\n';

alert(msg)
}


/*1. Crea un script donde declares una función obtenerImporteConImpuestos que reciba dos parámetros: 
el importe sin impuestos (numérico) y el tipo de producto (numérico entero). La función debe mostrar 
por pantalla el importe sin impuestos más el 21% si el tipo de producto es 1, ó el importe sin impuestos
 más el 10% si el tipo de producto es 2, ó el importe sin impuestos más el 5% si el tipo de producto es 3.

Ejemplo: obtenerImporteConImpuestos(100, 1) debe mostrar: Para un importe sin impuestos de 100 y 
tipo de producto 1 el resultado de importe con impuestos es 121. obtenerImporteConImpuestos(100, 2) 
debe mostrar: Para un importe sin impuestos de 100 y tipo de producto 2 el resultado de importe con 
impuestos es 110.

2. Crea un script donde declares una función obtenerImporteConImpuestos2 que reciba un parámetro: el 
importe sin impuestos (numérico). La función debe devolver un array con valor undefined para el índice 0, 
el importe sin impuestos más el 21% para el índice 1, el importe sin impuestos más el 10% para el índice 2, 
ó el importe sin impuestos más el 5% para el índice 3. Invoca la función haciendo que se muestre el contenido 
del array por pantalla.

obtenerImporteConImpuestos(100) debe devolver: resultado[0] = undefined, resultado[1] = 121, resultado[2] = 110, 
resultado[3] = 105. Por pantalla se debe mostrar: Para precio sin impuestos 100 si el producto es tipo 1 el 
importe es 121, si el producto es tipo 2 el importe es 110 y si el producto es tipo 3 el importe es 105.*/