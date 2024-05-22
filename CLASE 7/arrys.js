//Lista de compras
listaDeCompras[3] = 'Tomtes';
listaDeCompras[1] = 'lechuga';

//Ver lista de compras
var elementoDeArray = listaDeCompras[1];
console.log(elementoDeArray);

//lenght
var nombres = ['Mtias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

//push y unshif
var colores = ['Amarillo', 'Azul'];
colores.push ('rojo');
colores.push ('verde');
console.log (colores);

//pop y shift
colores.shift();
colores.pop();
console.log (colores);

//Includes
var pintores = ['Picasso', 'Velazquez', 'Van Gog', 'Dali'];
var existeDali = pintores.includes(Dali);
console.log(existeDali);

//Every
var numeros = [1,6,8,9,43];
var cumplenCondicion = numeros.every((num) => {num >5});
console.log(cumplenCondicion);

//Splith
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

//join
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//foreach
var numeros = [1,2,3,4];
numeros.forEach((num) => {console.log(num)});

//map
var numeros = [1,2,3,4];
var masUno = numeros.map((num) => {return num+1});
console.log (masUno);

//for
var arr= [1,2,3,4,5];
for (let i=0; i <arr.length; i++) {
    console.log(arr[i]);
}

//while
var arr =[];
while(arr.length <5) {
    arr.push('Camilo');
}
console.log(arr);


