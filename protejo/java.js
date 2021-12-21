//função para retirar evento padrão e verificar erro 
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
//retirando style de erro
function emailStyle(){
     let emailStyle = document.getElementById("email");
     emailStyle.setAttribute("class","email");
}

//Inicialização de Eventos
function addEvents(){
     erro();
     document.getElementById("email").setAttribute("class","email");
     document.getElementById("email").addEventListener("click",emailStyle);
}

window.addEventListener("load",addEvents);