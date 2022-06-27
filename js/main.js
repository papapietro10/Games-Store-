const carrito = [];
const productos = [
{id:1, titulo:'F1', precio: 18000, hayStock:false, img:"image/formula.webp"},
{id:2, titulo:'NBA - 2K22', precio: 20000, categoria:'Deporte', hayStock:false, img:"image/PS4-NBA-2K22.webp"},
{id:3, titulo:'FIFA 22', precio: 12000,categoria:'Deporte', hayStock:false, img:"image/PS4-FIFA-22-Cover.webp"},
{id:4, titulo:'NBA - 2K22', precio: 20000,categoria:'Deporte', hayStock:false, img:"image/PS4-NBA-2K22.webp"},

];

function filtrarPorCategoria(categoria){
const listados = productos.filter((producto) => categoria.categoria == categoria);
console.log(listados)
}


let deporte = ``;
for (let i = 0; i < productos.length; i++){

deporte += `<div class="col mb-5">
<div class="card h-100">                     
  <img class="card-img-top"  src=${productos[i].img} alt="..." />                
  <div class="card-body p-4">
    <div class="text-center">
      <h5 class="fw-bolder">${productos[i].titulo}</h5>$
      ${productos[i].precio}
    </div>
  </div>
  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="agregarAlCarrito(${productos[i].id})" href="#">Add to cart</a></div>
  </div>
</div>
</div>`;
}

function agregarAlCarrito(id){
  const calculo = productos.findIndex(producto => producto.id == id);
  carrito.push(productos[calculo]);
  console.log( 'Tenes ' + carrito.length + ' juego en el carrito');
  console.log(carrito)
  const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto. precio, 0 );
  document.getElementById('cuenta').innerHTML = carrito.length + "- $" + totalCarrito;

  }

document.getElementById("card-container-deporte").innerHTML = deporte
