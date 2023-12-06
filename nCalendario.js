function nCalendarioH() {

	var fecha = new Date();

	this.año = fecha.getFullYear();
	this.mes = fecha.getMonth(); 
	this.dia = fecha.getDay();
	this.hoy = fecha.getDate();

	var diaM = [0,1,2,3,4,5,6];
	var diaH = diaM[this.dia];
	var mesD = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	var diasPostF = mesD.slice(0, 27+1);
	var diasPostFB = mesD.slice(0, 28+1);
	var diasPostMC = mesD.slice(0, 29+1);
	var diasPostML = mesD.slice(0, 30+1);
	var fila1_6 = document.getElementsByTagName("td");


this.mesDia = function(){

		var mesCal = document.getElementById("mes");

	if (this.mes == 0) {mesCal.innerHTML = "ENERO DE " + this.año;}
	else if (this.mes == 1) {mesCal.innerHTML = "FEBRERO DE " + this.año;}
	else if (this.mes == 2) {mesCal.innerHTML = "MARZO DE " + this.año;}
	else if (this.mes == 3) {mesCal.innerHTML = "ABRIL DE " + this.año;}
	else if (this.mes == 4) {mesCal.innerHTML = "MAYO DE " + this.año;}
	else if (this.mes == 5) {mesCal.innerHTML = "JUNIO DE " + this.año;}
	else if (this.mes == 6) {mesCal.innerHTML = "JULIO DE " + this.año;}
	else if (this.mes == 7) {mesCal.innerHTML = "AGOSTO DE " + this.año;}
	else if (this.mes == 8) {mesCal.innerHTML = "SEPTIEMBRE DE " + this.año;}
	else if (this.mes == 9) {mesCal.innerHTML = "OCTUBRE DE " + this.año;}
	else if (this.mes == 10) {mesCal.innerHTML = "NOVIEMBRE DE " + this.año;}
	else {mesCal.innerHTML = "DICIEMBRE DE " + this.año;}
}


this.cal = function(){

do{
	for (var i=(this.hoy-1);i>=0;i--) {
		if(mesD[i] ==1){

			switch(diaH){

				case 0:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+6].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+5].style.backgroundColor='lightblue';
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+6].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+5].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+6].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+5].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+6].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+5].style.backgroundColor='lightblue';
				}
				break;

				case 1:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy-1].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy-1].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy-1].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy-1].style.backgroundColor='lightblue';					
				}
				break;

				case 2:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+1].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+1].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+1].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+1].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy].style.backgroundColor='lightblue';
				}
				break;

				case 3:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+2].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+1].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+2].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+1].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+2].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+1].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+2].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+1].style.backgroundColor='lightblue';
				}
				break;

				case 4:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+3].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+2].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+3].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+2].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+3].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+2].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+3].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+2].style.backgroundColor='lightblue';
				}
				break;

				case 5:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+4].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+3].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+4].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+3].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+4].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+3].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+4].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+3].style.backgroundColor='lightblue';					
				}
				break;

				case 6:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+5].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+4].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+5].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+4].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+5].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+4].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+5].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+4].style.backgroundColor='lightblue';			
				}
				break;
			}
		}
			if(diaH==0){diaH+=7;}
		diaH-=1;
	}
}while(mesD>0);
}
}
function nCalendarioES(eAño,eFecha,eMes) {

	var fecha = new Date();

		fecha.setFullYear(eAño);
		fecha.setDate(eFecha);
		fecha.setMonth(eMes-1);

	this.año = fecha.getFullYear();
	this.mes = fecha.getMonth(); 
	this.dia = fecha.getDay();
	this.hoy = fecha.getDate();

	var diaM = [0,1,2,3,4,5,6];
	var diaH = diaM[this.dia];
	var mesD = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	var diasPostF = mesD.slice(0, 27+1);
	var diasPostFB = mesD.slice(0, 28+1);
	var diasPostMC = mesD.slice(0, 29+1);
	var diasPostML = mesD.slice(0, 30+1);
	var fila1_6 = document.getElementsByTagName("td");


this.mesDia2 = function(){

		var mesCal = document.getElementById("mes");

	if (this.mes == 0) {mesCal.innerHTML = "ENERO DE " + this.año;}
	else if (this.mes == 1) {mesCal.innerHTML = "FEBRERO DE " + this.año;}
	else if (this.mes == 2) {mesCal.innerHTML = "MARZO DE " + this.año;}
	else if (this.mes == 3) {mesCal.innerHTML = "ABRIL DE " + this.año;}
	else if (this.mes == 4) {mesCal.innerHTML = "MAYO DE " + this.año;}
	else if (this.mes == 5) {mesCal.innerHTML = "JUNIO DE " + this.año;}
	else if (this.mes == 6) {mesCal.innerHTML = "JULIO DE " + this.año;}
	else if (this.mes == 7) {mesCal.innerHTML = "AGOSTO DE " + this.año;}
	else if (this.mes == 8) {mesCal.innerHTML = "SEPTIEMBRE DE " + this.año;}
	else if (this.mes == 9) {mesCal.innerHTML = "OCTUBRE DE " + this.año;}
	else if (this.mes == 10) {mesCal.innerHTML = "NOVIEMBRE DE " + this.año;}
	else {mesCal.innerHTML = "DICIEMBRE DE " + this.año;}
}

this.cal2 = function(){

do{
	for (var i=(this.hoy-1);i>=0;i--) {
		if(mesD[i] ==1){

			switch(diaH){

				case 0:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+6].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+5].style.backgroundColor='lightblue';
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+6].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+5].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+6].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+5].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+6].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+5].style.backgroundColor='lightblue';
				}
				break;

				case 1:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy-1].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy-1].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy-1].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy-1].style.backgroundColor='lightblue';					
				}
				break;

				case 2:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+1].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+1].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+1].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+1].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy].style.backgroundColor='lightblue';
				}
				break;

				case 3:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+2].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+1].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+2].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+1].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+2].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+1].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+2].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+1].style.backgroundColor='lightblue';
				}
				break;

				case 4:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+3].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+2].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+3].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+2].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+3].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+2].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+3].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+2].style.backgroundColor='lightblue';
				}
				break;

				case 5:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+4].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+3].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+4].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+3].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+4].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+3].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+4].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+3].style.backgroundColor='lightblue';					
				}
				break;

				case 6:
				if (this.año % 4 == 0 && this.mes == 1){
				for (var j=0; j<=diasPostFB.length; j++){
					fila1_6[j+5].innerHTML = diasPostFB[j]
					== undefined?"":diasPostFB[j];
					}
					fila1_6[this.hoy+4].style.backgroundColor='lightblue';						
				}
				else if (this.año % 4 != 0 && this.mes == 1){
				for (var j=0; j<=diasPostF.length; j++){
					fila1_6[j+5].innerHTML = diasPostF[j]
					== undefined?"":diasPostF[j];
					}
					fila1_6[this.hoy+4].style.backgroundColor='lightblue';
				}
				else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
				for (var j=0; j<=diasPostMC.length; j++){
					fila1_6[j+5].innerHTML = diasPostMC[j]
					== undefined?"":diasPostMC[j];
					}
					fila1_6[this.hoy+4].style.backgroundColor='lightblue';
				}
				else{
				for (var j=0; j<=diasPostML.length; j++){
					fila1_6[j+5].innerHTML = diasPostML[j]
					== undefined?"":diasPostML[j];
					}
					fila1_6[this.hoy+4].style.backgroundColor='lightblue';			
				}
				break;
			}
		}
			if(diaH==0){diaH+=7;}
		diaH-=1;
	}
}while(mesD>0);
}
}
window.onload = 
function objCalendario() {

	alert("Introduzca una fecha para ver el calendario de esa fecha."+
		"\nSi no introduce nada, verá según la fecha actual.")

	var fechaI = prompt("introduzca el día: ");		
	var mesI = prompt("introduzca el mes: ");
	var añoI = prompt("introduzca el año: ");
	fechaI = Number(fechaI);
	mesI = Number(mesI);
	añoI = Number(añoI);

	if(fechaI||mesI||añoI){

	var defCal2 = new nCalendarioES(añoI,fechaI,mesI);	

	defCal2.mesDia2();

	defCal2.cal2();
	}
	else{
	var defCal = new nCalendarioH(añoI,fechaI,mesI);	

	defCal.mesDia();

	defCal.cal();

	}
}


