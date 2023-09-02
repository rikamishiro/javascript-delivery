////////////////////////////////////////////////////////////
////// VARIÁVEIS
///////////////////////////////////////////////////////////

////////// o problema dessa primeira versão: permite redefinição do valor var
/////////  além disso o var é um escopo global

//if (true) {
//    var a = 10;
//}

//console.log(a);
//console.log( typeof a );

//var a = "hello world";
//console.log(a);
//console.log( typeof a );

//var a = 12;

//console.log(a);
//console.log( typeof a );

// const a = 10; // constante - não deixa declarar mais de uma vez
// let b = 20;  // variável - deixa declarar mais de uma vez

//b = 30;

// console.log(a);
// console.log(b);

////////////////////////////////////////////////////////////
////// IDENTIFICADORES - nomes válidos de variáveis
///////////////////////////////////////////////////////////

// [a-zA-Z_s] [a-zA-Z0-9_s]*

////////////////////////////////////////////////////////////
////// TIPOS DE DADOS
///////////////////////////////////////////////////////////

// console.log( typeof 10 );                   // number
// console.log( typeof 2.5 );                  // number
// console.log( typeof 'abc' );                // string
// console.log( typeof "abc" );                // string
// console.log( typeof `abc` );                // string

// const host = "localhost";
// const port = "3000";
// const resource = "restaurantes";

// const url = "http://" + host + ":" + port + "/" + resource;

// const url2 = `http://${host}:${port}/${resource}`;

// console.log(url2);

// console.log( url2.toUpperCase() );
// console.log( typeof null );
// console.log( typeof undefined );

// comparação: 
// ==       tenta fazer a conversão de tipos ===
// ===      faz a comparação com o mesmo tipo
// if (total === undefined);

// console.log(0 == '0');
// console.log(0 === '0');

// function soma(a,b){
//     return a + b;
//  }

// console.log(soma(1,2));     // 1 + 2 = 3
// console.log(soma(2));       // NaN -> significa que alguma das variáveis está errada (nessa caso só foi definido um valor)

// console.log(!!0);           // !! -> cenário onde uma variável é "false"

// function soma(a,b){
//     // iniciante
//     if (a == undefined || a == null ) {
//         a = 0;
//     }
//     // básico
//     if (a === undefined){
//         a = 0;
//     }
//     if (b === undefined){
//         b = 0;
//     }
//     // intermediário
//     if (!a){
//         a = 0;
//     }
//     if (!b){
//         b = 0;
//     }
//     // avançado
//     a = a || 0;
//     b = b || 0;
//     return a = b;
// }

////////////////////////////////////////////////////////////
////// CENÁRIOS ONDE UMA VARIÁVEL É FALSE
///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
////// STRING API
///////////////////////////////////////////////////////////

// let linguagem = "JavaScript";
// console.log( linguagem.length );
// console.log( linguagem.indexOf("a") );
// console.log( linguagem.indexOf("J") );
// console.log( linguagem.replace("Java", "EMCA") );

////////////////////////////////////////////////////////////
////// OBJETOS
///////////////////////////////////////////////////////////

// let obj = {};

// console.log( obj );
// console.log( typeof obj );

// const book = {
//     title: "Clean code",
//     author: "Robert Martins",
//     pages: 464,
//     available: true
// }

// console.log(book);

//short-hand notation

////////////////////////////////////////////////////////////
////// JSON
///////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
////// FUNÇÕES
///////////////////////////////////////////////////////////

// function subtract(a = 0, b = 0) {
//     return a - b;
// }

// const sum = function(a = 0, b = 0) {
//     return a + b;
// }

// console.log( subtract );
// console.log( sum );

// const calculator = function (fn) {          // function as parameter

//     return function(a, b) {                 // returning a function

//         return fn(a, b);                    // call of a param function

//     }

// }
// console.log(calculator(sum)(5,2));
// console.log(calculator(subtract)(5,2));

// const sumAll = function(...numbers) {

//     console.log(arguments);
//     console.log(numbers);

//     let total = 0;

//     for(let number of numbers){
//         total += number;
//     }

//     return total;

// }

// console.log( sumAll(1, 2, 3, 4, 5) );

////////////////////////////////////////////////////////////
////// THIS
///////////////////////////////////////////////////////////

// x = 10;
// y = 20;

// const calculateArea = function() {
//     return x * y;
// }

// console.log(calculateArea())

// const rectangle = {
//     x: 10, 
//     y: 2,
//     calculateArea
// }

// console.log( rectangle.calculateArea() );

// const bound = rectangle.calculateArea.bind(rectangle);

// setTimeout(bound, 1000);

// console.log(bound);