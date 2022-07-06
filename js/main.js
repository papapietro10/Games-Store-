//*CARRITO GENERAL*//
const carrito = [];

//*Evento en el bt de enviar*//
const enviar = document.getElementById("enviar");

enviar.onclick = () =>{
const nombre = document.getElementById("nombre").value;
const mail = document.getElementById("mail").value;
const apellido = document.getElementById("apellido").value;


alert(`Hola ${nombre}! 👋🏻 recibimos tu consulta. Nos estaremos contactando a traves del siguiente email 👉🏻 ${mail} Muchas gracias sr ${apellido} 👾`)
}


