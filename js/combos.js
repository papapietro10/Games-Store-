//*COMBOS*//

const productosCombos = [
{id:1, titulo:'Combo 1', precio: 50000, hayStock:false, img:"image/combo2.jpeg"},
{id:2, titulo:'Combo 2', precio: 80000, categoria:'Deporte', hayStock:false, img:"image/combo1.webp"},
{id:3, titulo:'combo 3', precio: 70000,categoria:'Deporte', hayStock:false, img:"image/213590-1200-auto.webp"},
{id:4, titulo:'Combo 4', precio: 60000,categoria:'Deporte', hayStock:false, img:"image/196114-1200-auto.webp"},
];

let combos = ``;
for (let i = 0; i < productosCombos.length; i++){

combos+= `<div class="col mb-5">
<div class="card h-100">                     
<img class="card-img-top"  src=${productosCombos[i].img} alt="..." />                
<div class="card-body p-4">
<div class="text-center">
<h5 class="fw-bolder">${productosCombos[i].titulo}</h5>$
${productosCombos[i].precio}
</div>
</div>
<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="agregarAlCarrito(${productosCombos[i].id})" href="#">Add to cart</a></div>
<div class="text-center verproducto"><a class="btn btn-outline-dark mt-auto" onclick="verProductoCombos(${productosCombos[i].id})" href="#">Ver producto</a></div>
</div>
</div>
</div>`;
}

//* FUNCION AGREGAR AL CARRITO*//

function agregarAlCarrito(id){
const calculo = producto.findIndex(producto => producto.id == id);
carrito.push(productosCombos[calculo]);
console.log( 'Tenes ' + carrito.length + ' juego en el carrito');
console.log(carrito)
const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto. precio, 0 );
document.getElementById('cuenta').innerHTML = carrito.length + "- $" + totalCarrito;
localStorage.setItem("combos", JSON.stringify((carrito)))
Swal.fire({
title: 'Felicitaciones!',
text: 'Agregaste un combo al carrito',
icon: 'success',
confirmButtonText: 'Seguir comprando',
})
}
document.getElementById("card-container-combos").innerHTML = combos;



//* FUNCION VER DETALLE*//

function verProductoCombos(id){
const deatlle = productosCombos.findIndex(producto => producto.id == id);
localStorage.setItem('detalleAmostrar',  JSON.stringify ([deatlle]));
location.href='../pages/producto-combo.html'

}