//*CARRITO GENERAL*//


//*Evento en el bt de enviar*//
const enviar = document.getElementById("enviar");

enviar.onclick = () =>{
const nombre = document.getElementById("nombre").value;
const mail = document.getElementById("mail").value;
const apellido = document.getElementById("apellido").value;


alert(`Hola ${nombre}! 👋🏻 recibimos tu consulta. Nos estaremos contactando a traves del siguiente email 👉🏻 ${mail} Muchas gracias sr ${apellido} 👾`)
}

const masInformacion = document.getElementById('ps5-info');

masInformacion.onclick =() =>{
    location.href='https://www.playstation.com/es-ar/ps5/'
}


