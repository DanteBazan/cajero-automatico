// --------------------------------ARRAYS-----------------------------------------//

// let pc1 = {
//  nombre: "Dante Pc",
//  procesador: "Ryzen 7 5700g",
//  ram: "16GB",
//  memoria: "1TB ",
// };

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let memoria = pc1["memoria"];

// frase = `el nombre de mi pc es ${nombre} <br>
//             tiene un procesador ${procesador} <br>
//             tiene ${ram} de ram <br>
//             tiene ${memoria} de memoria <br>
// `;

// document.write(frase);

// -------------------------------BUCLES-E-ITERACION------------------------------//

// numero = 0;

// while (numero < 10) {
//  numero++;
//  document.write(numero);
// }

// let animales = ["perro", "gato", "loro", "ratoncito"];

// for (animal in animales) {
//  document.write(animal + "<br>");
// }

// document.write("<br>");

// for (animal of animales) {
//  document.write(animal + "<br>");
// }

// ------------------------------------FUNCIONES--------------------------------//

// ----------------------------ESTO-ES-UN-EJEMPLO-DE-FUNCIONES------------------//

// let pregunta = prompt(`Hola Dante, Como estas?`);
// if (pregunta == "bien") {
//  alert("me alegro");
// } else if (pregunta == "nashe") {
//  alert("VAMOOO");
// } else {
//  alert("una pena");
// }

// function saludar() {
//  let pregunta = prompt(`Hola Dante, Como estas?`);
//  if (pregunta == "bien") {
//    alert("me alegro");
//  } else if (pregunta == "nashe") {
//    alert("VAMOOO");
//  } else if (pregunta == "que te importa") {
//    alert("para un poco flaco/a, encima que soy buena onda");
//  } else {
//    alert("una pena");
//  }
// }

// saludar();

// -------------------------EJEMPLO-AUTO-ENCENDIDO-O-APAGADO-------------------//

// function auto() {
//  let pregunta = prompt("Hola Dante, queres que arranque el auto?");
//  if (pregunta == "si") {
//    alert("Auto encendido");
//    return "el auto esta encendido, tiene demasiada nafta";
//  } else {
//    alert("el auto no arranco");
//    return "el auto no esta encendido, falta de nafta";
//  }
// }
// let encendido = auto();

// document.write(encendido);

// function sumar(num1, num2) {
//  document.write(num1 + num2);
// }

// sumar(28, 60);

// const multiplicar = (nro1, nro2) => {
//  document.write(nro1 * nro2);
// };

// multiplicar(2, 8);

// const maquinaLoteria = (hora) => {
//  let edad = prompt("Que edad tienes?");
//  if (edad >= 18) {
//    alert("podes pasar, disfruta la noche");
//    if (hora > 2 && hora <= 7) {
//      alert(
//        `flaco son las ${hora} de la mañana, podes pasar gratis, tomate todo rey`
//      );
//    } else if (hora > 7 && hora <= 10) {
//      alert("flaco, ya estamos por cerrar");
//    } else if (hora >= 10) {
//      alert("flaco, el boliche ya cerro");
//    }
//  } else {
//    alert("no flaco, tomatela antes de que llame a seguridad");
//  }
// };
// maquinaLoteria(15);

// ---------------------------------OBJETOS-------------------------------//
// class animal {
//   constructor(especie, edad, color) {
//     this.especie = especie;
//     this.edad = edad;
//     this.color = color;
//     this.info = `soy ${this.especie}, tengo ${
//       (this, edad)
//     } años y soy de color ${this.color}`;
//   }
//   verInformacion() {
//     document.write(this.info + "<br>");
//   }
// }

// const perro = new animal("dogo", 7, "blanco" + "<br>");
// const gato = new animal("gato", 5, "leoncito" + "<br>");
// const pajaro = new animal("loro", 3, "verde" + "<br>");

// document.write(perro.info);
// document.write(gato.info);
// document.write(pajaro.info);

// ---------------------------------------EJERCICIOS-DE-PRACTICA---------------------------------//
// Declara dos variables y realiza operaciones aritméticas con ellas
// Realiza operaciones de suma, resta, multiplicación y división

// const numero1 = 7;
// const numero2 = 4;

// //operaciones

// const suma = numero1 + numero2;
// const resta = numero1 - numero2;
// const multiplicacion = numero1 * numero2;
// const division = numero1 / numero2;

// console.log("suma es igual a:", suma);
// console.log("resta es igual a:", resta);
// console.log("multiplicacion es igual a:", multiplicacion);
// console.log("division es igual a:", division);

// ------------------------------------------------------------------------------------------------------
// --------------------------------------------PASAR-EJERCICIOS-A-FUNCIONES--------------------------------
// const suma = (num1, num2) => console.log(num1 + num2);

// suma(10, 5);

// console.log("-------");

// const resta = (num1, num2) => console.log(num1 - num2);

// resta(30, 10);

// console.log("-------");

// const multiplicacion = (num1, num2) => console.log(num1 * num2);

// multiplicacion(20, 3);

// console.log("-------");

// const division = (num1, num2) => console.log(num1 / num2);

// division(40, 5);

// -------------------------------------------------------------------------------------------------------
// Utiliza un bucle para imprimir los números del 1 al 5

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// ----------------------------------------------------------------------------------------------------------
// Crea un objeto persona con propiedades como nombre, edad y profesión
// Accede a las propiedades del objeto e imprímelas

// let persona = {
//   nombre: "Dante",
//   edad: 19,
//   peso: "60kg",
//   altura: "1.65",
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.peso);
// console.log(persona.altura);

// -----------------------------------------------------------------------------------
// class Animal {
//   constructor(especie, edad, color) {
//     this.especie = especie;
//     this.edad = edad;
//     this.color = color;
//     this.info = `soy de la especie ${especie}, tengo ${edad} años de edad y es de color ${color}`;
//   }
//   verInfo() {
//     document.write(this.info + "<br>");
//   }
// }

// class Perro extends Animal {
//   constructor(especie, edad, color, raza) {
//     super(especie, edad, color);
//     this.raza = raza;
//   }
//   ladrar() {
//     alert("¡WOW!");
//   }
// }

// const perro = new Perro("perro", 20, "rojo", "doberman");
// const gato = new Animal("gato", 3, "gris");
// const pajaro = new Animal("loro", 2, "verde");

// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();

// -------------------------EJEMPLO-DE-AUTO---------------------
// class auto {
//   constructor(marca, color, motor) {
//     this.marca = marca;
//     this.color = color;
//     this.motor = motor;
//     this.info = `este auto es de la marca ${marca},es de color ${color} y cuenta con un motor de ${motor}`;
//   }
//   verInfo() {
//     document.write(this.info + "<br>");
//   }
// }

// const auto1 = new auto("mercedes benz", "rojo", "7 cilindros");
// const auto2 = new auto("chevrolet", "verde", "2 cilindros");
// const auto3 = new auto("mustan", "negro mate", "11 cilindros");

// auto1.verInfo();
// auto2.verInfo();
// auto3.verInfo();

// -----------------------------------------------------------

// -------------------------PROBLEMA-DE-COFLA----------------
// class celular {
//   constructor(color, peso, resolucion, camara, ram) {
//     this.color = color;
//     this.peso = peso;
//     this.resolucion = resolucion;
//     this.camara = camara;
//     this.ram = ram;
//     this.info =
//       `mira cofla tenemos este telefono que tiene un color ${color}, el celular pesa aporximadamente ${peso},cuenta con una resolucion de ${resolucion}, una camara de ${camara} y ${ram} de memoria ram` +
//       "<br>";
//     this.encendido = false;
//   }
//   botonEncendido() {
//     if (this.encendido == false) {
//       alert("telefono encendido");
//       this.encendido = true;
//     } else {
//       alert("el celular esta apagado");
//       this.encendido = false;
//     }
//   }
//   reiniciar() {
//     if (this.encendido == true) {
//       alert("reiniciando celular");
//     }
//   }
//   tomarFoto() {
//     alert(`foto tomada en la resolucion ${this.resolucion}`);
//   }
//   grabarVideo() {
//     alert(`grabando video en ${this.camara}`);
//   }

//   verInformacion() {
//     document.write(this.info);
//   }
// }

// const celu1 = new celular("negro", "600g", "16mpx", "2pg x 3pg", 4);
// const celu2 = new celular("blanco", "800g", "4pg x 3pg", "23mpx", 8);
// const celu3 = new celular("plateado", "400g", "6pg x 4pg", "32mpx", 12);

// celu1.botonEncendido();
// celu1.reiniciar();
// celu1.tomarFoto();
// celu1.grabarVideo();
// celu2.verInformacion();
// celu3.verInformacion();

// -----------------------------------------------------------------------------------
//------------------------------METODOS-DE-STRING--------------------------------
// let string = new String(`Hola Mundo`);
// console.log(string);
//OTRA FORMA DE CREAR HOLA MUNDO DIRECTAMENTE DESDE UN OBJETO

//EJEMPLO-PARA-VALIDAR-SI-UN-DNI-ES-CORRECTO
// const validarDni = (dni) => {
//   if (dni.length === 8) {
//     console.log("Dni es valido");
//   } else {
//     console.log("Dni invalido");
//   }
// };

// validarDni(`44550759`);

// METODOS DE MAYUSCULA Y MINUSCULA
// let miMoto = "Yamaha";
// console.log(miMoto.toUpperCase());
// console.log(miMoto.toLowerCase());

//METODO REPLACE ES PARA REMPLAZAR SOLO LA PRIMERO OCURRENCIA O PALABRA EN CRIOLLO JAJA
// let texto = "Messi es el mejor jugador de todos los tiempos";
// console.log(texto);

// let nuevoTexto = texto.replace("Messi", "Cristiano");
// console.log(nuevoTexto);

// let cambiar = texto;
// console.log(texto.toLowerCase().replace("messi", "cristiano"));

//METODO PARA REMPLAZAR TODAS LAS OCURRENCIAS O PALABRAS
//replaceAll()

// let texto =
//   "Messi es el mejor jugador de todos los tiempos porque Messi sabe cuanto pesa la del mundo";
// console.log(texto);

// let nuevoTexto = texto.replaceAll("Messi", "Dibu");
// console.log(nuevoTexto);

//METODO INDEXOF, SIRVE PARA SABER EL INDICE DE UN STRING
// console.log("Lionel Andres Messi Cuccitini".indexOf("Lionel"));
// console.log("Lionel Andres Messi Cuccitini".indexOf("Andres"));
// console.log("Lionel Andres Messi Cuccitini".indexOf("Messi"));
// console.log("Lionel Andres Messi Cuccitini".indexOf("Cuccitini"));

//METODO PARA SACAR LOS ESPACIOS DE UN STRING
//trim()

// let texto = "       Hola Mundo         ";
// console.log(texto);
// let textoSinEspacios = texto.trim();
// console.log(textoSinEspacios);

//METODO PARA DIVIDIR UN STRING Y CONVERTIRLO EN UN ARRAY CON EL CARACTER QUE PASEMOS POR PARAMETRO
//split()
// let texto = "Hola`Mundo`No`Da`Mala`Suerte";
// let resultado = texto.split("`");
// console.log(resultado);

//COMO DAR VUELTA UN STRING JAJA
// let texto = "Messi es lo mas grande que hay";
// console.log(texto.split("").reverse().join(""));

//PROGRAMACION ORIENTADA A OBJETOS

//class luchito {
//  constructor(nombre, edad, sexo, estudios, hermanos) {
//    this.nombre = nombre;
//    this.edad = edad;
//    this.sexo = sexo;
//    this.estudios = estudios;
//    this.hermanos = hermanos;
//    this.info = `Hola me llamo ${this.nombre} tengo ${this.edad} años, soy un ${this.sexo}, estoy estudiando ${this.estudios} y tengo ${this.hermanos} hermanos`;
//  }
//  verInfo() {
//    console.log(this.info);
//  }
//
//const nombre1 = new luchito("lucho", 16, "Macho alfa", "Electromecanica", 5)
// console.log(nombre1.info);

//let nombre = prompt("Hola como estas hermano?, Me decis tu nombre?");
//let saludo = `Hola ${nombre} como estas?`;
//
//console.log(saludo);

//OPERADORES ARIMETICOS

// let suma = 35 + 10;
// console.log(suma);

// let resta = 20 - 4;
// console.log(resta);

// let multi = 5 * 5;
// console.log(multi);

// let divi = 30 / 2;
// console.log(divi);

// let resto = 60 % 2;
// console.log(resto);

//OPEADORES DE COMPARACION/RELACIONALES
// console.log(5 > 2);
// console.log(98 < 1);
// console.log(4 == 4);
// let numero = 9;
// console.log(4 == numero);

//EJEMPLO AND

// let edad = 18;
// var dni = false;

// console.log(edad >= 18 && dni == true);

// console.log("---------");

// //EJEMPLO OR
// console.log(edad >= 18 || dni == true);

// let edad = 18;
// var dni = !false;

// console.log(dni);

// function sumar(num1, num2) {
//   let resultado;
//   resultado = num1 + num2;
//   return resultado;
// }

// let suma = sumar(5, 2);
// console.log("el resultado es:" + suma);

// sumar(8, 9);
// console.log(`el resultado es: ${suma}`);

// function preguntar() {
//   let pregunta = prompt("Hola Hno,Como estas?");
//   if (pregunta == "bien") {
//     console.log("me alegro");
//   } else {
//     console.log("que pena macho");
//   }
//   return;
// }

// preguntar(anashe);

// function saludar() {
//   respuesta = prompt("hola como estas?");
//   if (respuesta == "bien") {
//     alert("me alegro");
//   } else {
//     alert("una pena");
//   }
// }

// saludar();
// saludar();

// function saludar(nombre) {
//   return console.log(`Hola ${nombre}`);
// }

// saludar("Dante");
// saludar("Erick");
// saludar("Bobby");
// saludar("Mami");
// saludar("Chabe");
// saludar("Papi");
// saludar("Cachi");
// saludar("G ladys");

// function sumar(a, b) {
//   console.log("-------");
//   return console.log(a + b);
// }

// sumar(5, 2);
// sumar(10, 20);
// sumar(10, 30);
// sumar(2, 3);
// sumar(40, 50);

// let numero1 = 10;
// let numero2 = 30;

// function sumar() {
//   resultado = numero1 + numero2;
//   alert(`El resultado es ${resultado}`);
// }

// sumar();

// function messiDorsal(num) {
//   if (num === 10) {
//     console.log(`Acertaste,la dorsal de messi es la 10`);
//   } else {
//     console.log(`Le pifeaste pa`);
//   }
// }

// messiDorsal(10);

// let pedirName = prompt("Ingresa tu nombre de usuario");
// let user = pedirName;

// function saludar() {
//   let pedirName = prompt("Ingresa tu nombre de usuario");
//   let user = pedirName;
//   console.log(`Hola ${user}`);
// }

// saludar();

// for (let i = 0; i <= 10; i++) {
//   let nombre = prompt("ingrese su nombre");
//   if (nombre == "pepe") {
//     console.log("usted no es bienvenido");
//   } else {
//     console.log("Usted esta inscripto");
//   }
// }

// console.log(`fin de las inscripciones`);

// const MiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i <= MiArray.length; i++) {
//   console.log(`Estamos iterando el numero ${i} del array`);
// }

// // EJERCICIO EN EL QUE BASICAMENTE SI SOS PEPE NO PODES ENTRAR JAJA,NO SERIA QUE NO ESTAS INSCRIPTO

// for (let i = 1; i <= 10; i++) {
//   let nombre = prompt("Ingrese su nombre");
//   if (nombre == "pepe") {
//     console.log("No estas cargado en la base de datos, tomate el palo");
//     continue;
//   }
//   console.log(`usted es el estudiante N ${i} adelante, ya esta inscripto`);
// }

// console.log("Fin de las inscripciones");

// let alumnos = ["Dante", "Lucre", "Marcelo", "Hector"];

// // console.log(alumnos[2]);

// for (let i = 0; i < alumnos.length; i++) {
//   console.log(alumnos[i]);
//   if (i == 2) {
//     break;
//   }
// }

// const nombres = ["Dante", "Juan", "Hector", "Nauel", "Lisette"];

// console.log(nombres);
// console.log("-----------------------------------------------------");

// for (let i = 0; i < nombres.length; i++) {
//   console.log(nombres[i]);
// }

// console.log("-----------------------------------------------------");
// console.log("Otra forma de recorrer un Array:");

// for (nombre of nombres) {
//   console.log(nombre);
// }

// console.log("-----------------------------------------------------");
// console.log("Otra forma mas de poder recorrer un Array:");

// for (nombre in nombres) {
//   console.log(nombre);
// }

// let nota1 = parseFloat(prompt("Ingrese la primer nota"));
// let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
// let nota3 = parseFloat(prompt("Ingrese la segunda nota"));

// console.log(nota1);
// console.log(nota2);
// console.log(nota3);

// let promedio = (nota1 + nota2 + nota3) / 3;
// console.log("El promedio es de: " + promedio);

// console.log("--------------------");

// if (promedio >= 7) {
//   console.log("Estas aprobadisimo,disfruta esas vacaciones");
// } else {
//   console.log("Estas desaprobadisimo, tenes que recursar el año");
// }

// let string = "Messi es el mejor de todos los tiempos";
// console.log(string);

// console.log(string.length);
// console.log("UpperCase:");
// console.log(string.toUpperCase());
// console.log("LowerCase");
// console.log(string.toLowerCase());

//OBJETOS CON CLASS

// class animal {
//   constructor(especie, edad, color) {
//     this.especie = especie;
//     this.edad = edad;
//     this.color = color;
//     this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//   }
//   verInfo() {
//     document.write(this.informacion + "<br>");
//   }
// }

// const perro = new animal("perro", 5, "rojo");
// const gato = new animal("gato", 7, "blanco");
// const pajaro = new animal("pajaro", 3, "verde");

// // console.log(perro);
// // console.log(gato);
// // console.log(pajaro);

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// const generarFuncion = () => {
//   const nombre = "Mozilla";
//   const mostrarNombre = () => {
//     return alert(nombre);
//   };
//   return mostrarNombre;
// };

// const nuevaFuncion = generarFuncion();
// nuevaFuncion();

// let persona = {
//   nombre: "Dante",
//   edad: 21,
//   esCasado: false,
// };

// //asi accedemos a los valores de un objeto.
// // console.log((persona.club = "River Plate"));
// //LAS DOS FORMAS DE CREAR OTRA PROPIEDAD ES VALIDA
// persona.club = "River Plate";

// console.log(persona);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.esCasado);
// console.log(persona.club);

//EJEMPLO PPRODUCTO DE MERCADO LIBRE

// const producto = {
//   nombre: "Kingston Fury DDR4",
//   valoracion: 5,
//   precio: 59128,
//   caracteristicas: [
//     "Capacidad de 16 gb",
//     "Velocidad de 3200mhz",
//     "DDR4 SDRAM",
//     "Compatible com AMD Ryzen y Intel",
//   ],
// };

// console.log("Nombre: " + producto.nombre);
// console.log("---------------------");
// console.log("Valoracion: " + producto.valoracion + " Extrellas");
// console.log("---------------------");
// console.log("Precio: " + producto.precio);
// console.log("---------------------");
// for (let i = 0; i < producto.caracteristicas.length; i++) {
//   console.log(producto.caracteristicas[i]);
// }

//NUCBA CLASS 49:20

// let persona = {
//   nombre: "Dante",
//   edad: 21,
//   esCasado: false,
//   presentarse: function () {
//     console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
//   },
// };

// persona.presentarse();
