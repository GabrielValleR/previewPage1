function erro(){
    var form = document.querySelector("form");   

     form.addEventListener("submit", function(evento){
          evento.preventDefault();
          
          for(var i=0; i < this.elements.length; i++){
               var item = this.elements[i];
               if(item.type !== "submit"){
                    if(item.value ==""){
                         item.setAttribute("class", "erro");
                         console.log("print");
                    }  
               }             
          }           
     })   
          
}

function emailStyle(){
     let emailStyle = document.getElementById("a");
     emailStyle.setAttribute("class","email");
}

//Inicialização de Eventos
function addEvents(){
     erro();
     document.getElementById("a").setAttribute("class","email");
     document.getElementById("a").addEventListener("click",emailStyle);
}

window.addEventListener("load",addEvents);