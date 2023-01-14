

function encriptar(){
let input = document.getElementById("input")
var query = input.value.split("");
    document.getElementById("munheco").style.display = "none";
    for (var i=0; i<= query.length; i=i+1){
        if(query[i]=="o"){
        query.splice(i,1,"ober");
        }
        if(query[i]=="a"){
            query.splice(i,1,"ai");
        }
        if(query[i]=="i"){
            query.splice(i,1,"imes");
        }
        if(query[i]=="e"){
            query.splice(i,1,"enter");
        }
         
        if(query[i]=="u"){
            query.splice(i,1,"ufat");
        }
        
        }
   return copiar=document.getElementById("exit").value=query.join("");
        
}

function desencriptar(){
    document.getElementById("munheco").style.display = "none";
    let input = document.getElementById("input")
    var query = input.value.split("");
    for (var i=0; i<= query.length; i=i+1){
        if(query[i]=="o"){
            query.splice(i,4,"o");
        }
        if(query[i]=="a"){
            query.splice(i,2,"a");
        }
        if(query[i]=="i"){
            query.splice(i,4,"i");
        }
        if(query[i]=="e"){
            query.splice(i,5,"e");
        }
         
        if(query[i]=="u"){
            query.splice(i,4,"u");
        }   
        }
   return copiar= document.getElementById("exit").value=query.join("");
}
        



function copy(){
    var copytext = document.getElementById("exit");
    const div= document.getElementById("body")
    copytext.select();
    document.execCommand("copy");
    const element= document.createElement("div");
    element.innerHTML='<div class="alert alert-dismissible alert-success"><button type="button" class="btn-close" data-bs-dismiss="alert"></button> Copiado satisfactoriamente.</div>'
    div.appendChild(element);

   

}