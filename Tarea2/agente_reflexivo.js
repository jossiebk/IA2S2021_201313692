// MIT License
// Copyright (c) 2020 Luis Espino
// Adaptacion de codigo para el manejo de 8 estados de la aspiradora, 2 veces - Jossie Bismarck Castrillo Fajardo 201313692
var estado_visitado=[0,0,0,0,0,0,0,0];

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
         // Para validar el estado en el que se encuentra actualmente
         var estado_actual=0;
         var repeticion=true;
         if(states[0]=="A" && states[1]=="DIRTY" && states[2]=="DIRTY"){
            console.log("1");
            estado_actual=1;
            estado_visitado[0]+=1;
         }else if(states[0]=="B" && states[1]=="DIRTY" && states[2]=="DIRTY"){
            console.log("2");
            estado_actual=2;
            estado_visitado[1]+=1;
         }else if(states[0]=="A" && states[1]=="DIRTY" && states[2]=="CLEAN"){
            console.log("3");
            estado_actual=3;
            estado_visitado[2]+=1;
            
         }else if(states[0]=="B" && states[1]=="DIRTY" && states[2]=="CLEAN"){
            console.log("4");
            estado_actual=4;
            estado_visitado[3]+=1;
            
         }else if(states[0]=="A" && states[1]=="CLEAN" && states[2]=="DIRTY"){
            console.log("5");
            estado_actual=5;
            estado_visitado[4]+=1;
         }else if(states[0]=="B" && states[1]=="CLEAN" && states[2]=="DIRTY"){
            console.log("6");
            estado_actual=6;
            estado_visitado[5]+=1;
           
         }else if(states[0]=="A" && states[1]=="CLEAN" && states[2]=="CLEAN"){
            console.log("7");
            estado_actual=7;
            estado_visitado[6]+=1;
            
         }else if(states[0]=="B" && states[1]=="CLEAN" && states[2]=="CLEAN"){
            console.log("8");
            estado_actual=8;
            estado_visitado[7]+=1;
            
         }

      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
         document.getElementById("log").innerHTML+="<br>************************ ESTADO ".concat(estado_actual).concat(" ************************");
      	document.getElementById("log").innerHTML+="<br>Posicion ==> ".concat(location).concat(" | Accion a realizar ==> ").concat(action_result).concat("<br><br>");
      	if (action_result == "CLEAN"){
        	   if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";		

         // Para verificar si ya se visito cada estado almenos 2 veces
         var contador=0;
         for(a =0;a<estado_visitado.length;a++){
            if(estado_visitado[a]>=2) contador+=1;
         }
         //En caso ya se hayan visitado los 8 estados se detiene la ejecucion
         if(contador>=8) repeticion=false;
            if(repeticion){
               //console.log(contador);
               console.log(estado_visitado);
               setTimeout(function(){ test(states) }, 2000);
            }
            else{
              // console.log(contador);
               console.log(estado_visitado);
               document.getElementById("log").innerHTML+="<br>Visito los 8 estados";
            }
}

var states = ["A","DIRTY","DIRTY"];
test(states);


