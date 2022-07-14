//*ACCION*//

const productosAccion = [
{id:9, titulo:'GTA', precio: 18000, categoria:'accion', hayStock:false,img:"image/357841-1600-auto.webp"},
{id:10, titulo:'Call of Duty', precio: 20000, categoria:'accion', hayStock:false,img:"image/combo3.jpeg"},
{id:11, titulo:'Ghost', precio: 12000,categoria:'accion', hayStock:false,img:"image/S5_GoTDC_R--2-.webp"},
{id:12, titulo:'VIII AGE', precio: 20000,categoria:'accion', hayStock:false,img:"image/357857-1600-auto.webp"},
];

let accion = ``;
for (let i = 0; i < productosAccion.length; i++){

accion+= `<div class="col mb-5">
<div class="card h-100">                     
<img class="card-img-top"  src=${productosAccion[i].img} alt="..." />                
<div class="card-body p-4">
<div class="text-center">
<h5 class="fw-bolder">${productosAccion[i].titulo}</h5>$
${productosAccion[i].precio}
</div>
</div>
<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="agregarAccion(${productosAccion[i].id})" href="#">Add to cart</a></div>
<div class="text-center verproducto"><a class="btn btn-outline-dark mt-auto" onclick="verProductoAccion(${productosAccion[i].id})" href="#">Ver producto</a></div>
</div>
</div>
</div>`;
}


//* FUNCION AGREGAR AL CARRITO*//

function agregarAccion(id){
const calculo = productosAccion.findIndex(producto => producto.id == id);
carrito.push(productosAccion[calculo]);
console.log( 'Tenes ' +  carrito.length + ' juego en el carrito');
console.log( carrito)
const totalCarrito =  carrito.reduce((acumulador, producto) => acumulador + producto. precio, 0 );
document.getElementById('cuenta').innerHTML =  carrito.length + "- $" + totalCarrito;
Swal.fire({
title: 'Felicitaciones!',
text: 'Agregaste un juego al carrito',
icon: 'success',
confirmButtonText: 'Seguir comprando',
})
}

document.getElementById("card-container-accion").innerHTML = accion;


//* FUNCION VER DETALLE*//
function verProductoAccion(id){
const deatlle = productosAccion.findIndex(producto => producto.id == id);
localStorage.setItem('detalleAmostrar',  JSON.stringify ([deatlle]));
location.href='../pages/producto-accion.html';

}