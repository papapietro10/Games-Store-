/*let prueba1 = [`H`,`O`,`L`,`A`,'M','U','N','D','O' ];
document.write('javascript: ');

for(let i=0; i<=0; i++){
document.write(`${prueba1[0]}`);
document.write(`${prueba1[1]}`);
document.write(`${prueba1[2]}`);
document.write(`${prueba1[3]}`);
document.write(`${prueba1[4]}`);
document.write(`${prueba1[5]}`);
document.write(`${prueba1[6]}`);
document.write(`${prueba1[7]}`);
document.write(`${prueba1[8]}`);
}


let prueba2 = [`H`,`O`,`L`,`A`,'M','U','N','D','O' ];

for(let i=0; i<=50; i++){
console.log(`${prueba2[0]}`);
console.log(`${prueba2[1]}`);
console.log(`${prueba2[2]}`);
console.log(`${prueba2[3]}`);
console.log(`${prueba2[4]}`);
console.log(`${prueba2[5]}`);
console.log(`${prueba2[6]}`);
console.log(`${prueba2[7]}`);
console.log(`${prueba2[8]}`);
} 
let costoTotal = 0;
let costoFinal = 0;
let bienvenidos = alert('Bienvenidos a GAME-OVER  STORE');
for (let i = 0; i <= 1; i++){
const juego1 = 'call of duty';
let comprar = prompt('¿Que queres comprar?');
let precioCallOfDuty = 25;
let stockCallOfDuty = 2;
costoFinal = precioCallOfDuty * 1.21;
function agregarAlCarrito( producto, precio, stock){
const resultadoFinal = `Agregaste ${producto} al carrito. Tiene un valor de $ ${precio} y actualmente quedan ${stock} en stock No te cuelgues y compralo YAAA!! 🔫 🔥 `
return resultadoFinal;
}
function ivaTotal(costoFinal){
alert("El total de tu compra + IVA es de $" + costoFinal);
}
if(!comprar){
alert('No agregaste un articulo 🚨');
comprar = prompt('¿Que queres comprar?');
}
if(comprar.toUpperCase() === juego1.toUpperCase()){
let res = agregarAlCarrito(comprar,precioCallOfDuty,stockCallOfDuty);
alert(res);
let resdos = ivaTotal(costoFinal);
alert(resdos);
}
else{
alert('Escribe = "call of duty"  Para que funsione🚨🚨🚨')
} }
 */



const carrito = [];
let  button
const productos = [
{id:1, titulo:'F1', precio: 18000, hayStock:false, img:"image/formula.webp"},
{id:2, titulo:'NBA - 2K22', precio: 20000, hayStock:false, img:"image/PS4-NBA-2K22.webp"},
{id:3, titulo:'FIFA 22', precio: 12000, hayStock:false, img:"image//PS4-FIFA-22-Cover.webp"},]

for (let i = 0; i < productos.length; i++){
button+=`
<div class="container">
  <div class="col mb-5 style-prueba">
    <div class="card h-10">
      <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem style-prueba-dos">Sale</div>
        <img class="card-img-top " src=${productos[i].img} alt="..." />
        <div class="card-body p-4">
          <div class="text-center">
            <h5 class="fw-bolder">${productos[i].titulo}</h5>                        
            <span class="text-muted text-decoration-line-through"></span> 
          </div>
      </div>
   <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center" ><a class="btn btn-outline-dark mt-auto" onclick="agregarAlCarrito(${productos[i].id})">Add to cart</a></div>
    </div>
  </div>
</div>`

}
function agregarAlCarrito(idDeProducto){
const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
carrito.push(productos[indiceEncontrado]);
console.log( 'Tenes ' + carrito.length + ' en el carrito');
console.log(carrito)
}

document.write(button);