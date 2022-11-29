let ventanaModalNombre = document.querySelector('.ventana-modal');
let cerrarModalNombre = document.querySelector('.cerrarModal');
let inputNombre = document.getElementById('nombre');

let nombre = '';

document.addEventListener('DOMContentLoaded', ()=>{

if(nombre.length == 0){

    establecerNombre();

  }
})



function establecerNombre(){

    nombre = inputNombre.value;
}

// SI NOMBRE == NULL QUIERO QUE:
// SE ABRA UNA VENTANA MODAL 
// Y ME PREGUNTE EL NOMBRE
// INGRESO EL VALOR Y ME LO GUARDE
// Y LO MUESTRE EN PANTALLA.