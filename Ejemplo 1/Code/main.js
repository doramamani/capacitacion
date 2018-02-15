/*global $*/

function arroz_con_pollo() {
    alert("Yanbal pide comida");
}

//window.addEventListener('load',CargaWindow)

$(document).ready(CargaWindow);


function CargaWindow(){
   // console.log("ready");
   
  // var boton = document.getElementById("btncomida");
  var boton =$('#btncomida');
  boton.on('click', arroz_con_pollo);
  
  $(".mi_clase").css(background-color','red');
   
   //boton.addEventListener('click', arroz_con_pollo);
   
    var instancia = new Persona();
    instancia.Initializar();
   // alert("hola");
    //alert("nombre:" + instancia.GetNombre() + " " + instancia.GetApellido() + " calza: "+ instancia.calza);

//$(".objeto10").css(background-color','red');
};
