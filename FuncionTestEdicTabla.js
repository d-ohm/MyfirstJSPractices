


 function transformarEnEditable(nodo) {
 	//nodo recibido es SPAN
var nodoTd = nodo.parentNode;
var nodoTr = nodoTd.parentNode;
var alimento= nodoTr.childNodes[1];
var calorias= nodoTr.childNodes[3];
var grasas=nodoTr.childNodes[5];
var proteina=nodoTr.childNodes[7];
var carbohidratos=nodoTr.childNodes[9];
var nodoAcciones=nodoTr.childNodes[11];
var botones= document.getElementById('botones');
var editando= document.querySelectorAll(".acciones");

// alert('Hola');
for (var i = 0; i < editando.length; i++) {

 if (editando[i].textContent=="En edición"){ 
nodoTr = false;
alert("Solo se puede editar una línea. Recargue la página para poder editar otra")
}
}
if (nodoTr) {
	/*alert(alimento.innerHTML+"\n"+
 calorias.textContent+"\n"+grasas.innerHTML+"\n"+
	proteina.innerHTML+"\n"+carbohidratos.innerText);*/

	var nuevoCod= "<form  name='formulario' id='formulario' onreset='anular()'>"+
	"<td><input type='text' name='alimento' id='alimento' value= '"+alimento.innerHTML+"' size='5'> </td>"+ 
	"<td><input type='text' name='calorias' id='calorias' value='"+calorias.innerHTML+"' size='2'> </td>"+ 
	"<td><input type='text' name='grasas' id='grasas' value='"+grasas.innerHTML+"' size='2'> </td>"+ 
	"<td><input type='text' name='proteina' id='proteina' value='"+proteina.innerHTML+"' size='2'> </td>"+ 
	"<td><input type='text' name='carbohidratos' id='carbohidratos' value='"+carbohidratos.innerHTML+"' size='2'> </td>"+
	"<td id='acciones' style='text-align: center;'>En edición</td>"+	
	"<a href='javascript: capturarEnvio()''></a></form>";

	nodoTr.innerHTML = nuevoCod;

	botones.innerHTML= "<p style='display: block;'>Pulse Aceptar para guardar los cambios o Cancelar para anularlos</p>"+
	"<button id='botonAceptar' form='formulario' type='submit' onsubmit='capturarEnvio()'>Aceptar</button>"+
	" <button id='botonCancelar' form='formulario' type='reset'>Cancelar</button>";
	// method='get' action='EjercJStablaEditada.php' target='_blank' onsubmit='capturarEnvio()' onclick='capturarEnvio()'

 
}
 function capturarEnvio() {
// var botonAceptar= querySelector("#botonAceptar");
// if (botonAceptar) {
var nuevosDatos=	
"<td style='text-align: center;' value='"+alimento.textContent+"'>  </td>"+
"<td style='text-align: center;' value='"+calorias.textContent+"'>  </td>"+
"<td style='text-align: center;' value='"+document.querySelector('#grasas').nodeValue+"'>  </td>"+
"<td style='text-align: center;' value='"+document.querySelector('#proteina').nodeValue+"'>  </td>"+
"<td style='text-align: center;' value='"+document.querySelector('#carbohidratos').nodeValue+"'>  </td>"+
"<td class='acciones' style='text-align: center;'><span onclick='transformarEnEditable(this)'>Editar</span></td>";

nodoTr.innerHTML=nuevosDatos;
 // }
// document.formulario.submit();
  }
}



/*"+document.getElementById('alimento').innerText+"
"+document.getElementById('calorias').innerText+"
"+document.getElementById('grasas').innerText+"
"+document.getElementById('proteina').innerText+"
"+document.getElementById('carbohidratos').innerText+"*/

 /*function enviar(){
 	
 }*/
 function anular() {

window.location.reload();
}
