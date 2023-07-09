//Funciones en JavaScript

function hello() {
    return function () {
        return 'Hola Mundo';
    }
}

//console.log(hello());


//Funciones en JavaScript con Parametros

function hello(name) {
        return 'Hola Mundo '+name;
}
//console.log(hello('Raul'));


//Funciones en JavaScript con Parametros
function add( x, y) {
    return x+y;
}

//console.log(add(3,5))
//console.log(add(7,9))



//Funciones en JavaScript con Parametros Default Params
function add( x=0, y=0) {
    return x+y;
}
//console.log(add(3,5))
//console.log(add(23.3,2))


//Objetos
const user = {
    name: 'Raul',
    lastname: 'Cudris',
    age: 30,
    addres: {
        country: 'colombia',
        city: 'bogota',
        street: 'main street 123'
    },
    friends:[ 'Freddy, Jose, Jorge'],
    active: true,
    sendMail: function () {
        return 'sending email...'
    }
}

//console.log(user.addres);
//console.log(user.friends)
//console.log(user.active)
//console.log(user.sendMail)


//Constantes

const name = 'laptop';
const price = 3000;

const newProduct ={
    name,
    price
}
//console.log(newProduct)


//Manipulacion del Dom
const title = document.createElement('h1')
title.innerText= 'Hola Mundo desde Js';

const button =document.createElement('button');
button.innerText = 'click';
button.addEventListener('click',function () {
    //title.innerText = 'Hola Texto Actualizado varias veces con Js';
    //alert('Ser realizo un click');
})

document.body.append(title)
document.body.append(button)


//Destructuring de Objetos

const userName = {
    name: 'Martin',
    age: 30
}
function printInfo(userName) {
     return `<h1> Hola ${userName.name} </h1>`
}

console.log(printInfo(userName))

document.body.innerHTML= printInfo(userName);





