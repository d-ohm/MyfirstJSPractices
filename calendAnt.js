// function calend(){

// 	var fecha = new Date();

// 	fecha.setFullYear(2012);
// fecha.setDate(5);
// 	fecha.setMonth(1);
// 	

// var año = fecha.getFullYear();
// var hoy = fecha.getDate();
// var dia = fecha.getDay();
// var mes = fecha.getMonth();
// var mesCal = document.getElementById("mes");

// var feb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
// var febB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
// var mesC = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
// var mesL = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
// var fila1 = document.getElementById("fila1");
// var fila2 = document.getElementById("fila2");
// var fila3 = document.getElementById("fila3");
// var fila4 = document.getElementById("fila4");
// var fila5 = document.getElementById("fila5");
// var fila6 = document.getElementById("fila6");
// var otDiF1 = fila1.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");		
// var otDiF2 = fila2.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");		
// var otDiF3 = fila3.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");		
// var otDiF4 = fila4.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");		
// var otDiF5 = fila5.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");		
// var otDiF6 = fila6.querySelectorAll(".lu, .ma, .mi, .ju, .vi, .sa, .do");
// var diasFaltanML = mesL.slice(hoy, 30+1);
// var diasAntesML = mesL.slice(0, hoy-1);
// var diasFaltanMC = mesC.slice(hoy, 29+1);
// var diasAntesMC = mesC.slice(0, hoy-1);
// var diasFaltanM2B = febB.slice(hoy, 28+1);
// var diasAntesM2B = febB.slice(0, hoy-1);
// var diasFaltanM2 = febB.slice(hoy, 27+1);
// var diasAntesM2 = febB.slice(0, hoy-1);
// var dDif = 7 -hoy;


// alert(diasAntesM2B + " "+diasFaltanM2B);

// 	switch (mes) {

// 	case 1: 

// 		if (año % 4 == 0) {


// 			switch (dia) {

// 			case 0:
// 					if (hoy <= 7) {
// 						for (var i=0; i<=diasAntesM2B.length;i++){
// 							dDif>0?otDiF1[i+dDif].innerHTML = diasAntesM2B[i]:
// 						 	otDiF1[i].innerHTML = diasAntesM2B[i];
// 						}

// 						for (var i=0; i <= diasFaltanM2B.length; i++){
// 							fila1.querySelector(".do").innerHTML = hoy;
// 							otDiF2[i].innerHTML = diasFaltanM2B[i]; 
// 							otDiF3[i].innerHTML = diasFaltanM2B[i+7]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+14]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+21] 
// 							== undefined? "": diasFaltanM2B[i+21];
							
// 							}
// 					} 

// 					else if (hoy>7 && hoy <=14 ) {
// 						dDif +=7;
// 						var dif1Sem = hoy-7;	
// 						for (var i=0; i<=diasAntesM2B.length;i++){
// 							if (i==5){continue diasFaltan;}
// 							else {dDif>0?otDiF1[i+dDif].innerHTML = diasAntesM2B[i]:
// 							 otDiF1[i].innerHTML = diasAntesM2B[i];}
// 							}
						 	
									
// 						diasFaltan: for (var i=0; i <= diasFaltanM2B.length; i++){
// 							fila2.querySelector(".do").innerHTML = hoy;
// 							// otDiF1[i].innerHTML = diasAntesM2B[i];
// 							// otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF2[i].innerHTML = diasAntesM2B[i+dif1Sem];
// 							otDiF3[i].innerHTML = diasFaltanM2B[i]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+7];
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+14] 
// 							== undefined? "": diasFaltanM2B[i+14];
// 							}
// 					}

// 					else if (hoy>14 && hoy <=21 ) { 
// 						for (var i=0; i<=diasAntesM2B.length;i++){
// 							dDif>0?otDiF1[i+dDif].innerHTML = diasAntesM2B[i]:
// 						 	otDiF1[i].innerHTML = diasAntesM2B[i];
// 						}
// 						for (var i=0; i <= diasFaltanM2B.length; i++){
// 						fila3.querySelector(".do").innerHTML = hoy;
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasAntesM2B[i+14];
// 							otDiF4[i].innerHTML = diasFaltanM2B[i]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+7] 
// 							== undefined? "": diasFaltanM2B[i+7];
// 							}
// 				}

// 					else if (hoy>21 && hoy <=28) {
// 						for (var i=0; i<=diasAntesM2B.length;i++){
// 							dDif>0?otDiF1[i+dDif].innerHTML = diasAntesM2B[i]:
// 						 	otDiF1[i].innerHTML = diasAntesM2B[i];
// 						}		
// 						for (var i=0; i <= diasFaltanM2B.length; i++){
// 						fila4.querySelector(".do").innerHTML = hoy;
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasAntesM2B[i+14];
// 							otDiF4[i].innerHTML = diasAntesM2B[i+21];
// 							otDiF5[i].innerHTML = diasFaltanM2B[i] 
// 							== undefined? "": diasFaltanM2B[i];
// 							}
// 				} 

// 					else if (hoy >28 )  {
// 						for (var i=0; i<=diasAntesM2B.length;i++){
// 							dDif>0?otDiF1[i+dDif].innerHTML = diasAntesM2B[i]:
// 						 	otDiF1[i].innerHTML = diasAntesM2B[i];
// 						}		
// 						for (var i=0; i <= diasFaltanM2B.length; i++){
// 						fila5.querySelector(".do").innerHTML = hoy;
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasFaltanM2B[i]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+7];
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+14] 
// 							== undefined? "": diasFaltanM2B[i+14];
// 							}
// 				}break;

// 			case 1:
// 					if (hoy <= 7) {
// 						for (var i=0; i <= diasFaltanM2B.length; i++){ fila1.querySelector(".lu").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasFaltanM2B[i-1];
// 							otDiF2[i].innerHTML = diasFaltanM2B[i+6];
// 							otDiF3[i].innerHTML = diasFaltanM2B[i+13]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+20]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+27] 
// 							== undefined? "": diasFaltanM2B[i+27];
// 							}
// 					} 

// 					else if (hoy>7 && hoy <=14 ) {
// 						for (var i=0; i <= diasFaltanM2B.length; i++){ 
// 						fila2.querySelector(".lu").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasAntesM2B[i];
// 							otDiF2[i].innerHTML = diasFaltanM2B[i-1]; 
// 							otDiF3[i].innerHTML = diasFaltanM2B[i+6]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+13]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+20] 
// 							== undefined? "": diasFaltanM2B[i+20];
// 							}
// 					}

// 					else if (hoy>14 && hoy <=21 ) { 
// 						for (var i=0; i <= diasFaltanM2B.length; i++){ 
// 						fila3.querySelector(".lu").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasAntesM2B[i];
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasFaltanM2B[i-1]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+6]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+13] 
// 							== undefined? "": diasFaltanM2B[i+13];
// 							}
// 				}

// 					else if (hoy>21 && hoy <=28) {			
// 						for (var i=0; i <= diasFaltanM2B.length; i++){ 
// 						fila4.querySelector(".lu").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasAntesM2B[i];
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasAntesM2B[i+14]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i-1]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+6] 
// 							== undefined? "": diasFaltanM2B[i+6];
// 							}
// 				} 

// 					else if (hoy >28 )  {			
// 						for (var i=0; i <= diasAntesM2B.length; i++){ 
// 						fila5.querySelector(".lu").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasAntesM2B[i];
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasAntesM2B[i+14]; 
// 							otDiF4[i].innerHTML = diasAntesM2B[i+21]; 
// 							// otDiF5[i].innerHTML = diasFaltanM2B[i-1] 
// 							// == undefined? "": diasFaltanM2B[i-1];
// 							}
// 				}break;

// 			case 2:
// 					if (hoy <= 7) {
// 						for (var i=0; i <= diasFaltanM2B.length; i++){ 
// 							fila1.querySelector(".lu").innerHTML = hoy-1;
// 							fila1.querySelector(".ma").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasFaltanM2B[i-2];
// 							otDiF2[i].innerHTML = diasFaltanM2B[i+5];
// 							otDiF3[i].innerHTML = diasFaltanM2B[i+12]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+19]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+26] 
// 							== undefined? "": diasFaltanM2B[i+26];
// 							}
// 					} 

// 					else if (hoy>7 && hoy <=14 ) {
// 						for (var i=0; i <= diasFaltanM2B.length; i++){ 
// 						fila2.querySelector(".ma").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasAntesM2B[i];
// 							otDiF2[i].innerHTML = diasFaltanM2B[i-1]; 
// 							otDiF3[i].innerHTML = diasFaltanM2B[i+6]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+13]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+20] 
// 							== undefined? "": diasFaltanM2B[i+20];
// 							}
// 					}

// 					else if (hoy>14 && hoy <=21 ) { 
// 						for (var i=0; i <= diasFaltanM2B.length; i++){ 
// 						fila3.querySelector(".ma").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasAntesM2B[i];
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasFaltanM2B[i-1]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i+6]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+13] 
// 							== undefined? "": diasFaltanM2B[i+13];
// 							}
// 				}

// 					else if (hoy>21 && hoy <=28) {			
// 						for (var i=0; i <= diasFaltanM2B.length; i++){ 
// 						fila4.querySelector(".ma").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasAntesM2B[i];
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasAntesM2B[i+14]; 
// 							otDiF4[i].innerHTML = diasFaltanM2B[i-1]; 
// 							otDiF5[i].innerHTML = diasFaltanM2B[i+6] 
// 							== undefined? "": diasFaltanM2B[i+6];
// 							}
// 				} 

// 					else if (hoy >28 )  {			
// 						for (var i=0; i <= diasAntesM2B.length; i++){ 
// 						fila5.querySelector(".ma").innerHTML = hoy;
// 							otDiF1[i].innerHTML = diasAntesM2B[i];
// 							otDiF2[i].innerHTML = diasAntesM2B[i+7]; 
// 							otDiF3[i].innerHTML = diasAntesM2B[i+14]; 
// 							otDiF4[i].innerHTML = diasAntesM2B[i+21]; 
// 							// otDiF5[i].innerHTML = diasFaltanM2B[i-1] 
// 							// == undefined? "": diasFaltanM2B[i-1];
// 							}
// 				}break;



// 			}
// 		}

// 			else if (año % 4 != 0){
// 				var diasFaltanM2B = febB.slice(hoy, 28+1);
// 				var diasAntesM2B = febB.slice(0, hoy-1);

// 					if (hoy <= 7) {

// 						for (var j=0; j <= diasAntesM2B.length; j++){ otDiF1[j].innerHTML = j+1;
// 							}
// 					} 

// 					else if (hoy>7 && hoy <=14 ) {

// 						for (var i=0; i<= diasAntesM2B.length; i++){  otDiF1[i].innerHTML = i+1; otDiF2[i].innerHTML = i+7; 
// 							}
// 					}

// 					else if (hoy>14 && hoy <=21 ) { 


// 						for (var i=0; i<= diasAntesM2B.length; i++){  otDiF1[i].innerHTML = i+1; otDiF2[i].innerHTML = i+7; otDiF3[i].innerHTML = i+14; 
// 							}
// 					}

// 					else if (hoy>21 && hoy <=28) {			

// 						for (var i=0; i<= diasAntesM2B.length; i++){  otDiF1[i].innerHTML = i+1; otDiF2[i].innerHTML = i+7; otDiF3[i].innerHTML = i+14; otDiF4[i].innerHTML = i+21;
// 							}
// 					} 

// 					else if (hoy >28 )  {			

// 						for (var i=0; i<= diasAntesM2B.length; i++){  otDiF1[i].innerHTML = i+1; otDiF2[i].innerHTML = i+8; otDiF3[i].innerHTML = i+15; otDiF4[i].innerHTML = i+22; fila5.querySelector(".lu").innerHTML = hoy;
// 							}
// 					}


// 			}break;

// 	case 3:
// 	case 5:
// 	case 8:
// 	case 10:

	


// 	}
// }

