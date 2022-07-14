//*AVENTURA*//

const productosAventura = [
{id:5, titulo:'HorizoN', precio: 25000, hayStock:false, img:"image/357982-1600-auto.webp"},
{id:6, titulo:'Ratchet Clank', precio: 20000, categoria:'Aventura', hayStock:false, img:"image/356676-1600-auto.webp"},
{id:7, titulo:'The last of us part II', precio: 19000,categoria:'Aventura', hayStock:false, img:"image/the-last-of-us2-main.webp"},
{id:8, titulo:'Spider-Man', precio: 20000,categoria:'Aventura', hayStock:false, img:"image/Spiderman-ultimate.webp"},
];

let aventura = ``;
for (let i = 0; i < productosAventura.length; i++){

aventura += `<div class="col mb-5">
<div class="card h-100">                     
<img class="card-img-top"  src=${productosAventura[i].img} alt="..." />                
<div class="card-body p-4">
<div class="text-center">
<h5 class="fw-bolder">${productosAventura[i].titulo}</h5>$
${productosAventura[i].precio}
</div>
</div>
<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="agregarAventura(${productosAventura[i].id})" href="#">Add to cart</a></div>
<div class="text-center verproducto"><a class="btn btn-outline-dark mt-auto" onclick="verProductoAventura(${productosAventura[i].id})" href="#">Ver producto</a></div>
</div>
</div>
</div>`;
}

//* FUNCION AGREGAR AL CARRITO*//
function agregarAventura(id){
const calculo = productosAventura.findIndex(producto => producto.id == id);
carrito.push(productosAventura[calculo]);
console.log( 'Tenes ' + carrito.length + ' juego en el carrito');
console.log(carrito)
const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto. precio, 0 );
document.getElementById('cuenta').innerHTML = carrito.length + "- $" + totalCarrito;
localStorage.setItem("Aventura", JSON.stringify((carrito)))
Swal.fire({
title: 'Felicitaciones!',
text: 'Agregaste un juego al carrito',
icon: 'success',
confirmButtonText: 'Seguir comprando',
})
}

document.getElementById("card-container-aventura").innerHTML = aventura;


//* FUNCION VER DETALLE*//
function verProductoAventura(id){
const deatlle = productosAventura.findIndex(producto => producto.id == id);
localStorage.setItem('detalleAmostrar',  JSON.stringify ([deatlle]));
location.href='../pages/producto-aventura.html'
}