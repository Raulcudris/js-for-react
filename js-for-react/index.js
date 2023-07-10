//Funciones en JavaScript

function hello() {
    return function () {
        return 'Hola Mundo';
    }
}

//console.log(hello());


//Funciones en JavaScript con Parametros

/*function hello(name) {
        return 'Hola Mundo '+name;
}
//console.log(hello('Raul'));
*/

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
//button.innerText = 'click';
/*button.addEventListener('click',function () {
    //title.innerText = 'Hola Texto Actualizado varias veces con Js';
    //alert('Ser realizo un click');
})

document.body.append(title)
document.body.append(button)
*/

//Destructuring de Objetos

const userName = {
    name: 'Jose',
    age: 49
}
function printInfo({name,age}) {
     return `<h1> Hola ${name} tienes una edad de ${age} </h1>`
}

//console.log(printInfo(userName))
//document.body.innerHTML= printInfo(userName);

//Funciones anonimas

function start() {
    return `Starting...`;
}
//console.log(start());

const buttonx = document.createElement('button');
buttonx.innerText = 'Click me';

buttonx.addEventListener('click', function () {
    alert('Clicked');
})

//document.body.append(buttonx);

//Arrow functions

function addx(x,y) {
    return x + y;
}

const addc = (x,y)=>{
    return x+ y
}

const showText   = () => 'Hola Mundo..';
//console.log(`${showText()} Bienvenido Raul`);
const showNumber = () => 22;
//console.log(`${showNumber()+33}`)
const showBoolean = () => true;
const showArray = () => [1,2,3];
const showObject = () =>({name:'Raul'})

//console.log(`${showBoolean()}`)
//console.log(`${showArray()}`)
//console.log(`${showObject()}`)


//String literals

//Foreach metodos de arrays (map, filter, foreach, concat)
const names = ['Brayan','Martin','Raul'];
const newNames = ['marcos','mario','Jose Miguel'];
/*for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element)
}*/

/*names.forEach((name)=>{
    console.log(name)
})
*/

//Corre un arreglo 
//const newNames = names.map((name)=>{ return  `Hola ${name}` })
//console.log(newNames);

//Buscar un nombre en el arreglo
/*const newNames = names.find((name)=>{
    if( name === 'Brayan'){
        return name;
    }
})
console.log(newNames);
*/

//Filtrar en un arreglo
const nameFound = names.filter((name)=>{
    if(name === 'Raul'){ return name }
})
const namesFound = names.filter((name)=>{
    if(name !== 'Raul'){ return name }
})

//console.log(namesFound);
//console.log(nameFound);

//Concatenar dos arreglos

//const namesComplete = names.concat(newNames);
//console.log(namesComplete);


// spread operator

const userArray = {
    name: 'Raul',
    lastname: 'Sinning',
    age: 29,
    profesion:{
        Basica:'primary',
        Secundary: 'bachiller',
        tecnico: true
    }
}

const address = {
    street : 'main street 123',
    city: 'bogota'
} 

const userInfo = {
    ...userArray,
    ...address
}

//console.log(userArray)
//console.log(address)
//console.log(userInfo)


//Ecmascript modules

//import { add } from "./add.js";

//add(23,3);


// optional Chaining
const personUser= {
    name: 'Raul',
    address:{
        city:'valledupar'
    },
    location:{
            latitud: 23.22,
            longitud: 12.00,
    }
}
//console.log(personUser.location?.city)

// Async/await
const ul = document.createElement('ul');

/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        data.forEach((post) => {
            const li = document.createElement('li');
            li.innerText = post.title;
            ul.append(li);
        });
        document.body.append(ul);
    })
*/

/*fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => console.log(json))
*/

async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    data.forEach((post) => {
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}

loadData();