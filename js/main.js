const carrito = [];
const productos = [
{id:1, titulo:'F1', precio: 18000, hayStock:false, img:"image/formula.webp"},
{id:2, titulo:'NBA - 2K22', precio: 20000, categoria:'Deporte', hayStock:false, img:"image/PS4-NBA-2K22.webp"},
{id:3, titulo:'FIFA 22', precio: 12000,categoria:'Deporte', hayStock:false, img:"image/PS4-FIFA-22-Cover.webp"},
{id:4, titulo:'NBA - 2K22', precio: 20000,categoria:'Deporte', hayStock:false, img:"image/PS4-NBA-2K22.webp"},
];

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
 
//*AVENTURA*//


const productosAventura = [
{id:5, titulo:'HorizoN', precio: 25000, hayStock:false, img:"image/357982-1600-auto.webp"},
{id:6, titulo:'Ratchet Clank', precio: 20000, categoria:'Aventura', hayStock:false, img:"image/356676-1600-auto.webp"},
{id:7, titulo:'The last of us part II', precio: 19000,categoria:'Aventura', hayStock:false, img:"/image/the-last-of-us2-main.webp"},
{id:8, titulo:'Spider-Man', precio: 20000,categoria:'Aventura', hayStock:false, img:"/image/Spiderman-ultimate.webp"},
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
      <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="agregarAlCarrito(${productosAventura[i].id})" href="#">Add to cart</a></div>
  </div>
</div>
</div>`;
}

function agregarAlCarrito(id){
  const calculo = productosAventura.findIndex(producto => producto.id == id);
  carrito.push(productosAventura[calculo]);
  console.log( 'Tenes ' + carrito.length + ' juego en el carrito');
  console.log(carrito)
  const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto. precio, 0 );
  document.getElementById('cuenta').innerHTML = carrito.length + "- $" + totalCarrito;

  }

document.getElementById("card-container-aventura").innerHTML = aventura;

//*ACCION*//


const productosAccion = [
  {id:1, titulo:'GTA', precio: 18000, categoria:'accion', hayStock:false, img:"image/357841-1600-auto.webp"},
  {id:2, titulo:'Call of Duty', precio: 20000, categoria:'accion', hayStock:false, img:"image/combo3.jpeg"},
  {id:3, titulo:'Ghost', precio: 12000,categoria:'accion', hayStock:false, img:"image/S5_GoTDC_R--2-.webp"},
  {id:4, titulo:'VIII AGE', precio: 20000,categoria:'accion', hayStock:false, img:"image/357857-1600-auto.webp"},
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
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="agregarAlCarrito(${productos[i].id})" href="#">Add to cart</a></div>
    </div>
  </div>
  </div>`;
  }
  
  function agregarAlCarrito(id){
    const calculo = productosAccion.findIndex(producto => producto.id == id);
    carrito.push(productosAccion[calculo]);
    console.log( 'Tenes ' + carrito.length + ' juego en el carrito');
    console.log(carrito)
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto. precio, 0 );
    document.getElementById('cuenta').innerHTML = carrito.length + "- $" + totalCarrito;
  
    }
  
  document.getElementById("card-container-accion").innerHTML = accion;

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
    </div>
  </div>
  </div>`;
  }
  
  function agregarAlCarrito(id){
    const calculo = productosCombos.findIndex(producto => producto.id == id);
    carrito.push(productosCombos[calculo]);
    console.log( 'Tenes ' + carrito.length + ' juego en el carrito');
    console.log(carrito)
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto. precio, 0 );
    document.getElementById('cuenta').innerHTML = carrito.length + "- $" + totalCarrito;
  
    }
  
  document.getElementById("card-container-combos").innerHTML = combos;