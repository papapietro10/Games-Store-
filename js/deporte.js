//*DEPORTE*//

const productosDeporte = [
{id:1, titulo:'F1', precio: 18000, hayStock:0,img:"image/formula.webp"},
{id:2, titulo:'NBA - 2K22', precio: 20000, hayStock:9, img:"image/PS4-NBA-2K22.webp"},
{id:3, titulo:'FIFA 22', precio: 12000, hayStock:10, img:"image/PS4-FIFA-22-Cover.webp"},
{id:4, titulo:'NBA - 2K22',precio: 20000, hayStock:8, img:"image/PS4-NBA-2K22.webp"},
];

let deporte = ``;
for (let i = 0; i < productosDeporte.length; i++){

deporte+= `<div class="col mb-5">
<div class="card h-100">                     
<img class="card-img-top"  src=${productosDeporte[i].img} alt="..." />                
<div class="card-body p-4">
<div class="text-center">
<h5 class="fw-bolder">${productosDeporte[i].titulo}</h5>$
${productosDeporte[i].precio}
</div>
</div>
<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="agregarDeporte(${productosDeporte[i].id})" href="#">Add to cart</a></div>
<div class="text-center verproducto"><a class="btn btn-outline-dark mt-auto" onclick="verProductoDeportes(${productosDeporte[i].id})" href="#">Ver producto</a></div>
</div>
</div>b                                                                                                                                                                                                                                                                               
</div>`;
}


//* FUNCION AGREGAR AL CARRITO*//
function agregarDeporte(id){
const calculo = productosDeporte.findIndex(producto => producto.id == id);
carrito.push(productosDeporte[calculo]);
console.log( 'Tenes ' + carrito.length + ' juego en el carrito');
console.log(carrito)
const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto. precio, 0 );
document.getElementById('cuenta').innerHTML = carrito.length + "- $" + totalCarrito;
localStorage.setItem("deportes", JSON.stringify((carrito)))
Swal.fire({
title: 'Felicitaciones!',
text: 'Agregaste un juego al carrito',
icon: 'success',
confirmButtonText: 'Seguir comprando',
})
}






document.getElementById("card-container-deporte").innerHTML = deporte



//* FUNCION VER DETALLE*//
function verProductoDeportes(id){
const deatlle = productosDeporte.findIndex(producto => producto.id == id);
localStorage.setItem('detalleAmostrar',  JSON.stringify ([deatlle]));
location.href='../pages/producto-deporte.html'

}

