function nCalendarioPS() {

	var fecha = new Date();

	// fecha.setFullYear(2016);
	fecha.setDate(1);
	// fecha.setMonth(1);
	

	

	this.año = fecha.getFullYear();
	this.mes = fecha.getMonth(); 
	this.dia = fecha.getDay();
	this.hoy = fecha.getDate();


	var dDif = 7 - this.hoy;

	var mesD = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

	var diasAnt = mesD.slice(0, this.hoy-1); 
	var diasPostF = mesD.slice(0, 27+1);
	var diasPostFB = mesD.slice(0, 28+1);
	var diasPostMC = mesD.slice(0, 29+1);
	var diasPostML = mesD.slice(0, 30+1);


	var fila1 = document.getElementById("fila1");
	var fila1d = fila1.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");
	var fila2 = document.getElementById("fila2");
	var fila2d = fila2.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");
	var fila3 = document.getElementById("fila3");
	var fila3d = fila3.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");
	var fila4 = document.getElementById("fila4");
	var fila4d = fila4.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");
	var fila5 = document.getElementById("fila5");
	var fila5d = fila5.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");
	var fila6 = document.getElementById("fila6");
	var fila6d = fila6.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");


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
	

	this.sem1 = function(){
		// alert(dDif);

		switch(this.dia){

			case 0:
			if (this.año % 4 != 0 ){
					for(var i=0; i <= diasPostML.length; i++){
						if (typeof fila1d[i+6]!=='undefined'){	
						fila1d[i+5].innerHTML = diasPostML[i];}
						if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
							typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
							typeof fila6d[i]!=='undefined'||typeof fila6d[i]!=='undefined'){
						fila2d[i].innerHTML = diasPostML[i+1]; 
						fila3d[i].innerHTML = diasPostML[i+8]; 
						fila4d[i].innerHTML = diasPostML[i+15]; 
						fila5d[i].innerHTML = diasPostML[i+22] 
						== undefined? "": diasPostML[i+22];
						fila6d[i].innerHTML = diasPostML[i+29]
						== undefined?"":diasPostML[i+29];}
					}
						
				}
				
			fila1.querySelector(".do").innerHTML=1;
			// if (this.año % 4 == 0 && this.mes == 1){
			// 		for (var i=0; i<=diasAnt.length;i++){
			// 			if (typeof fila1d[i+dDif] !== 'undefined' ){
			// 			dDif>0?fila1d[i+dDif].innerHTML = diasAnt[i]:
			// 		 	fila1d[i].innerHTML = diasAnt[i];}}
	
			// 		for (var i=0; i <= diasPostFB.length; i++){
			// 			if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
			// 				typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
			// 				typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostFB[i]; 
			// 			fila3d[i].innerHTML = diasPostFB[i+7]; 
			// 			fila4d[i].innerHTML = diasPostFB[i+14]; 
			// 			fila5d[i].innerHTML = diasPostFB[i+21] 
			// 			== undefined? "": diasPostFB[i+21];
			// 			fila6d[i].innerHTML = diasPostFB[i+28]
			// 			== undefined?"":diasPostFB[i+28];}}
			// 		}
			// else if (this.año % 4 != 0 && this.mes == 1){
			// 		for (var i=0; i<=diasAnt.length;i++){
			// 			if (typeof fila1d[i+dDif] !== 'undefined' ){
			// 			dDif>0?fila1d[i+dDif].innerHTML = diasAnt[i]:
			// 		 	fila1d[i].innerHTML = diasAnt[i];}}
	
			// 		for (var i=0; i <= diasPostF.length; i++){
			// 			if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
			// 				typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
			// 				typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostF[i]; 
			// 			fila3d[i].innerHTML = diasPostF[i+7]; 
			// 			fila4d[i].innerHTML = diasPostF[i+14]; 
			// 			fila5d[i].innerHTML = diasPostF[i+21] 
			// 			== undefined? "": diasPostF[i+21];
			// 			fila6d[i].innerHTML = diasPostF[i+28]
			// 			== undefined?"":diasPostF[i+28];}}
			// 	}
			// else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
			// 		for (var i=0; i<=diasAnt.length;i++){
			// 			if (typeof fila1d[i+dDif] !== 'undefined' ){
			// 			dDif>0?fila1d[i+dDif].innerHTML = diasAnt[i]:
			// 		 	fila1d[i].innerHTML = diasAnt[i];}}
		
			// 		for (var i=0; i <= diasPostMC.length; i++){
			// 			if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
			// 				typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
			// 				typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostMC[i]; 
			// 			fila3d[i].innerHTML = diasPostMC[i+7]; 
			// 			fila4d[i].innerHTML = diasPostMC[i+14]; 
			// 			fila5d[i].innerHTML = diasPostMC[i+21] 
			// 			== undefined? "": diasPostMC[i+21];
			// 			fila6d[i].innerHTML = diasPostMC[i+28]
			// 			== undefined?"":diasPostMC[i+28];}}
			// }
			// else {
			// 		for (var i=0; i<=diasAnt.length;i++){
			// 			if (typeof fila1d[i+dDif] !== 'undefined' ){
			// 			dDif>0?fila1d[i+dDif].innerHTML = diasAnt[i]:
			// 		 	fila1d[i].innerHTML = diasAnt[i];}}
	
			// 		for (var i=0; i <= diasPostML.length; i++){
			// 			if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
			// 				typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
			// 				typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostML[i]; 
			// 			fila3d[i].innerHTML = diasPostML[i+7]; 
			// 			fila4d[i].innerHTML = diasPostML[i+14]; 
			// 			fila5d[i].innerHTML = diasPostML[i+21] 
			// 			== undefined? "": diasPostML[i+21];
			// 			fila6d[i].innerHTML = diasPostML[i+28]
			// 			== undefined?"":diasPostML[i+28];}}						

			// 	}
			// 	fila1.querySelector(".do").innerHTML = this.hoy;
			// 	fila1.querySelector(".do").style.backgroundColor='lightblue';
			break;

			case 1: 
				fila1.querySelector(".lu").innerHTML= this.hoy;
				break;
			case 2:  fila1.querySelector(".ma").innerHTML= this.hoy;
			break;
			case 3:  fila1.querySelector(".mi").innerHTML= this.hoy;
			break;
			case 4:  fila1.querySelector(".ju").innerHTML= this.hoy;
			break;
			case 5: fila1.querySelector(".vi").innerHTML= this.hoy;
			break;
			// if (this.año % 4 == 0 && this.mes == 1){
			// 		for (var i=0; i <= diasPostFB.length; i++){
			// 			if (typeof fila1d[i+this.hoy]!=='undefined'){
			// 			fila1d[i+this.hoy].innerHTML = diasPostFB[i];}
			// 			if (typeof fila2d[i]!=='undefined'||
			// 				typeof fila3d[i]!=='undefined'||typeof fila4d[i]!=='undefined'||
			// 				typeof fila5d[i]!=='undefined'||typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostFB[i+6]; 
			// 			fila3d[i].innerHTML = diasPostFB[i+13]; 
			// 			fila4d[i].innerHTML = diasPostFB[i+20]; 
			// 			fila5d[i].innerHTML = diasPostFB[i+27] 
			// 			== undefined? "": diasPostFB[i+27];}}
			// 	}
			// else if (this.año % 4 != 0 && this.mes == 1){
			// 		for (var i=0; i <= diasPostF.length; i++){
			// 			if (typeof fila1d[i+this.hoy]!=='undefined'){
			// 			fila1d[i+this.hoy].innerHTML = diasPostF[i];}
			// 			if (typeof fila2d[i]!=='undefined'||
			// 				typeof fila3d[i]!=='undefined'||typeof fila4d[i]!=='undefined'||
			// 				typeof fila5d[i]!=='undefined'||typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostF[i+6]; 
			// 			fila3d[i].innerHTML = diasPostF[i+13]; 
			// 			fila4d[i].innerHTML = diasPostF[i+20]; 
			// 			fila5d[i].innerHTML = diasPostF[i+27] 
			// 			== undefined? "": diasPostF[i+27];}}
			// 	}
			// else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
			// 		for (var i=0; i <= diasPostMC.length; i++){
			// 			if (typeof fila1d[i+this.hoy]!=='undefined'){
			// 			fila1d[i+this.hoy].innerHTML = diasPostMC[i];}
			// 			if (typeof fila2d[i]!=='undefined'||
			// 				typeof fila3d[i]!=='undefined'||typeof fila4d[i]!=='undefined'||
			// 				typeof fila5d[i]!=='undefined'||typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostMC[i+6]; 
			// 			fila3d[i].innerHTML = diasPostMC[i+13]; 
			// 			fila4d[i].innerHTML = diasPostMC[i+20]; 
			// 			fila5d[i].innerHTML = diasPostMC[i+27] 
			// 			== undefined? "": diasPostMC[i+27];}}
			// }
			// else {
			// 		for (var i=0; i <= diasPostML.length; i++){
			// 			if (typeof fila1d[i+this.hoy]!=='undefined'){
			// 			fila1d[i+this.hoy].innerHTML = diasPostML[i];}
			// 			if (typeof fila2d[i]!=='undefined'||
			// 				typeof fila3d[i]!=='undefined'||typeof fila4d[i]!=='undefined'||
			// 				typeof fila5d[i]!=='undefined'||typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostML[i+6]; 
			// 			fila3d[i].innerHTML = diasPostML[i+13]; 
			// 			fila4d[i].innerHTML = diasPostML[i+20]; 
			// 			fila5d[i].innerHTML = diasPostML[i+27] 
			// 			== undefined? "": diasPostML[i+27];}}						

			// 	}
			// 	fila1.querySelector(".lu").innerHTML = this.hoy;
			// 	fila1.querySelector(".lu").style.backgroundColor='lightblue';
			// 	break;
			case 6: 
			// if (this.año % 4 == 0 && this.mes == 1){
			// 		if (this.hoy>1){
			// 		for (var i=0; i <= diasAnt.length; i++){
			// 			if (typeof fila1d[i]!=='undefined'){
			// 				fila1d[i].innerHTML = diasAnt[i];}}}
			// 		for(var i=0; i <= diasPostFB.length; i++){
			// 			if (typeof fila1d[i+this.hoy]!=='undefined'){	
			// 			fila1d[i+this.hoy].innerHTML = diasPostFB[i]}
			// 			if (typeof fila2d[i]!=='undefined'||
			// 				typeof fila3d[i]!=='undefined'||typeof fila4d[i]!=='undefined'||
			// 				typeof fila5d[i]!=='undefined'||typeof fila6d[i]!=='undefined'){
			// 			fila2d[i].innerHTML = diasPostFB[i+6]; 
			// 			fila3d[i].innerHTML = diasPostFB[i+13]; 
			// 			fila4d[i].innerHTML = diasPostFB[i+20]; 
			// 			fila5d[i].innerHTML = diasPostFB[i+27] 
			// 			== undefined? "": diasPostFB[i+27];}}
			// 	}

			// && this.mes == 1

			// else 
			if (this.año % 4 != 0 ){
					for(var i=0; i <= diasPostML.length; i++){
						// if (typeof fila1d[i+5]!=='undefined'){	
						fila1d[i+5].innerHTML = diasPostML[i];
					// }
						// if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
						// 	typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
						// 	typeof fila6d[i]!=='undefined'||typeof fila6d[i]!=='undefined'){
						fila2d[i].innerHTML = diasPostML[i+1]; 
						fila3d[i].innerHTML = diasPostML[i+8]; 
						fila4d[i].innerHTML = diasPostML[i+15]; 
						fila5d[i].innerHTML = diasPostML[i+22] 
						== undefined? "": diasPostML[i+22];
						fila6d[i].innerHTML = diasPostML[i+29]
						== undefined?"":diasPostML[i+29];
					// }
					}
						
				}
				
				fila1.querySelector(".sa").innerHTML=1;		

				// fila1.querySelector(".ma").innerHTML = this.hoy;
				// fila1.querySelector(".ma").style.backgroundColor='lightblue';
				break;

		}
		
	}
	// this.sem2 = function(){
	// 		dDif += 7;
	// 		// alert(dDif);
	// 		var dif1Sem = this.hoy-7;
	// 		// alert(dif1Sem);

	// 		switch (this.dia){

	// 	case 0:
	// 		if(this.año % 4 == 0 && this.mes == 1){

	// 				for (var i=0; i<=diasAnt.length; i++){
	// 					if (typeof fila1d[i+dDif] !== 'undefined' ){
	// 					dDif>0?fila1d[i+dDif].innerHTML = diasAnt[i]:
	// 					fila1d[i].innerHTML = diasAnt[i];}}								
	// 				for (var i=0; i <=diasPostFB.length; i++){ 
	// 					if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
	// 						typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
	// 						typeof fila6d[i]!=='undefined'){
	// 					fila2d[i].innerHTML = diasAnt[i+dif1Sem];
	// 					fila3d[i].innerHTML = diasPostFB[i]; 
	// 					fila4d[i].innerHTML = diasPostFB[i+7];
	// 					fila5d[i].innerHTML = diasPostFB[i+14] 
	// 					== undefined? "": diasPostFB[i+14];}}
	// 			}
	// 		else if (this.año % 4 != 0 && this.mes == 1){

	// 				for(var i=0; i<=diasAnt.length;i++){
	// 					if (typeof fila1d[i+dDif] !== 'undefined' ){
	// 					dDif>0?fila1d[i+dDif].innerHTML = diasAnt[i]:
	// 					 fila1d[i].innerHTML = diasAnt[i];}}								
	// 				for (var i=0; i <= diasPostF.length; i++){
	// 					if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
	// 						typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
	// 						typeof fila6d[i]!=='undefined'){
	// 					fila2d[i].innerHTML = diasAnt[i+dif1Sem];
	// 					fila3d[i].innerHTML = diasPostF[i]; 
	// 					fila4d[i].innerHTML = diasPostF[i+7];
	// 					fila5d[i].innerHTML = diasPostF[i+14] 
	// 					== undefined? "": diasPostF[i+14];}}				
	// 			}

	// 		else if (this.mes==3||this.mes==5||this.mes==8||this.mes==10) {
	// 				for(var i=0; i<=diasAnt.length;i++){
	// 					if (typeof fila1d[i+dDif] !== 'undefined' ){
	// 					dDif>0?fila1d[i+dDif].innerHTML = diasAnt[i]:
	// 					 fila1d[i].innerHTML = diasAnt[i];}}								
	// 				for (var i=0; i <= diasPostMC.length; i++){
	// 				if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
	// 						typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
	// 						typeof fila6d[i]!=='undefined'){				
	// 					fila2d[i].innerHTML = diasAnt[i+dif1Sem];
	// 					fila3d[i].innerHTML = diasPostMC[i]; 
	// 					fila4d[i].innerHTML = diasPostMC[i+7];
	// 					fila5d[i].innerHTML = diasPostMC[i+14] 
	// 					== undefined? "": diasPostMC[i+14];}}				
	// 			}
	// 		else {

	// 				for (var i=0; i<=diasAnt.length;i++){
	// 					if (typeof fila1d[i+dDif] !== 'undefined' ){
	// 					dDif>0?fila1d[i+dDif].innerHTML = diasAnt[i]:
	// 					 fila1d[i].innerHTML = diasAnt[i];}}								
	// 				for (var i=0; i <= diasPostML.length; i++){
	// 					if (typeof fila2d[i]!=='undefined'||typeof fila3d[i]!=='undefined'||
	// 						typeof fila4d[i]!=='undefined'||typeof fila5d[i]!=='undefined'||
	// 						typeof fila6d[i]!=='undefined'){
	// 					fila2d[i].innerHTML = diasAnt[i+dif1Sem];
	// 					fila3d[i].innerHTML = diasPostML[i]; 
	// 					fila4d[i].innerHTML = diasPostML[i+7];
	// 					fila5d[i].innerHTML = diasPostML[i+14] 
	// 					== undefined? "": diasPostML[i+14];
	// 					fila6d[i].innerHTML = diasPostML[i+21]
	// 					== undefined?"":diasPostML[i+21];}}
	// 			}
	// 			fila2.querySelector(".do").innerHTML = this.hoy;
	// 			fila2.querySelector(".do").style.backgroundColor='lightblue';
	// 			break;
				
	// 	case 1:

	// 	}
	// }

	this.mssg = function(){
	var messg = "dia: "+this.dia+", mes:  "+
		this.mes+", fecha: "+this.hoy+", año: " +this.año +"\n diasAnt: "+
		 diasAnt+"\n diasPostFB: "+diasPostFB+"\n diasPostF: " +diasPostF+
		 "\n diasPostMC: "+diasPostMC+"\n diasPostML:"+diasPostML;

		 document.getElementById("mesesDif").innerHTML=messg;}
	}

function color() {

	var fechaC = new Date();

	// fecha.setFullYear(2016);
	// fecha.setDate(1);
	// fecha.setMonth(1);
	

	

	this.añoC = fechaC.getFullYear();
	this.mesC = fechaC.getMonth(); 
	this.diaC = fechaC.getDay();
	this.hoyC = fechaC.getDate();


	this.colorHoy = function(){


		switch(this.dia){
			case 0: 
			var fila1dD = document.querySelector(".do");
			break;
			case 1:
			var fila1dD = document.querySelector(".lu");
			break;
			case 2:
			var fila1dD = document.querySelector(".ma");
			break;
			case 3:
			var fila1dD = document.querySelector(".mi");
			break;
			case 4:
			var fila1dD = document.querySelector(".ju");
			break;
			case 5:
			var fila1dD = document.querySelector(".vi");
			break;
			default:
			var fila1dD = document.querySelector(".sa");
			break;
		}

		fila1dD.style.backgroundColor='lightblue'
	}	
}

// window.onload = 
function objCalendario() {

	var defCal = new nCalendarioPS();
	var nColor = new color();

	defCal.mesDia();

	defCal.mssg();

	defCal.sem1();

	nColor.colorHoy();

	// if (defCal.hoy <=7){defCal.sem1();}
	// else if (defCal.hoy>7 && defCal.hoy <=14) {defCal.sem2();}
}

