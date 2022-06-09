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
} */
let costoTotal = 0;
let costoFinal = 0;
let bienvenidos = alert('Bienvenidos a GAME-OVER  STORE');
for (let i = 0; i <= 1; i++){
const juego1 = 'call of duty';
let comprar = prompt('¿Que quieres comprar?');
let precioCallOfDuty = 25;
let stockCallOfDuty = 2;
costoFinal = precioCallOfDuty * 1.21;
function agregarAlCarrito( producto, precio, stock){
const resultadoFinal = `Agregaste ${producto} al carrito. Tiene un valor de $ ${precio} y actualmente quedan ${stock} en stock No te cuelgues y compralo YAAA!! `
return resultadoFinal;
}
function ivaTotal(costoFinal){
alert("El total de tu compra + IVA es de $" + costoFinal);
}
if(!comprar){
alert('No agregaste un articulo');
comprar = prompt('¿Que queres comprar?');
}
if(comprar.toUpperCase() === juego1.toUpperCase()){
let res = agregarAlCarrito(comprar,precioCallOfDuty,stockCallOfDuty);
alert(res);
let resdos = ivaTotal(costoFinal);
alert(resdos);
}
else{
alert('Agrgega = "call of duty"  Para que funsione')
} }


