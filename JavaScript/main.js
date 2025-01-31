// console.log('Hello, World!');
// const name = 'John Doe';
// console.log(`Hello, ${name}!`);

// const age = 30;
// let message = `Hello, ${name}! You are ${age} years old.`;
// console.log(message);

// function greet(name, age) {
//   return `Hello, ${name}! You are ${age} years old.`;
// }   
// console.log(greet('Jane Doe', 25));


// const person = 'tomilola'
// console.log(`Hello ${person}!`);

// let str = "1234"
// console.log(str)
// console.log(str.length)
// console.log(Number(str))
// console.log("glow">"glew")
// console.log("maa">"gzz")

// // let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// // if (year == 2015) {
// //   alert( 'You are right!' );
// // }
// // else if (year < 2015) {
// //   alert( 'Too early...' );
// // }
// // else if (year > 2015) {
// //   alert( 'Too late' );
// // } 
// // else {
// //   alert( 'An unknown value' );
// // }

// let aged = 23>10 ? "yes" : "no";
// console.log(aged)

// let ages = prompt("How old are you?", 18);

// let messages = (ages < 3) ? 'Hi, baby!'
//   : (ages < 18) ? 'Hello!'
//   : (ages < 100) ? 'Greetings!'
//   : 'What an unusual age!'; 
// console.log(messages)

// let login = prompt("who are you?", '');

// if(login == "admin"){
//   let password = prompt("password", '');
//   if(password == "TheMaster"){
//     alert("Welcome!")
//   } else if(password == "" || password == null){
//     alert("Cancelled")
//   } else {
//     alert("Wrong Password")
//   }
// }
// else if(login != "admin"){
//   alert("I dont know you")
// }
// else if(login == "" || login == null){
//   alert("Cancelled")
// }

// let i = 0;

// while (i < 3){
//   console.log(i)
//   i++
// }

// let j = 0;
// do{
//   console.log(j)
//   j++
// }
// while(j<3) 

// for(let t =0; t<10; t++){
//   if (i % 2==0) continue
//  console.log(t) 
// }

// function tomi(){
//   console.log("Hello Tomi")
// }
// tomi();

// function sum(a,b){
//   let name = a + b
//   return name
// }

// sum(2,3);
// let add = sum(2,3);
// let q=add*3;
// console.log(q)

// let sums = (a,b) => {
//   let name = a + b
//   return name
// }
// console.log(sums(2,3))

// let sumss = (a,b) =>
//    a*b;
// console.log(sumss(2,3))

// function pow(x, n) {
//   if (n == 0) return 1;
//   return x * pow(x, n - 1);
// }

// console.log(pow(2, 4));

// function pow(x, n) {

//     if(typeof n !="number"|| n<1 || isNaN(n)){
//         return "Invalid input";
//     }
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result = result * x;
//     }
//     return result;
// }

// let x = parseInt(prompt("Kindly input x?", ''));
// let n = parseInt(prompt("Kindly input n?", ''));
// alert("The answer is: " + pow(x, n));

// let string = "Hello";
// console.log(string.indexOf("e"));
// console.log(string.slice(3));
// console.log(string.includes("e"));

// function checkSpam(tony){
// let a = str.toLowerCase().includes("viagra")
// let b = str.toLowerCase().includes("free")
// let c = str.toLowerCase().includes("xxx")
// return a || b || c

//     if(tony.toLowerCase().includes("viagra") || tony.toLowerCase().includes("free") || tony.toLowerCase().includes("xxx")){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(checkSpam("buy ViagRA now"))
// console.log(checkSpam("free xxxxx"))
// console.log(checkSpam("innocent rabbit"))

// let name = "John";
// function sayHi() {
// alert(" Hi, " + name);
// }
// name = "Pete";
// sayHi(); 


// function makeWorker() {
//     let name = "Pete";
//     return function() {
//     alert( name) ;
//     } ;
// }
//     let name = "John";

//     let work = makeWorker();

// The returned function from makeWorker has access to the variable `name` defined within makeWorker's scope.
// This is an example of a closure in JavaScript. The function retains access to the scope in which it was created,
// even after that scope has finished executing.

// function makeWorker() {
//     // let name = "Pete";
//     return function() {
//         alert(name);
//     };
// }

// let name = "John";

// let work = makeWorker();

// work(); // This will alert "Pete" because the function retains access to the `name` variable in makeWorker's scope.

// function counter() {
//     let count = 0;
//     return {
//         increment: function() { count++; console.log(count); },
//         decrement: function() { count--; console.log(count); }
//     };
// }


// let counterT = counter();
// counterT().increment();

// function sayHi(phrase, who) {
//     alert(phrase + ' , ' + who);
// }
// setTimeout(sayHi, 1000, "Hello", "John"); //this shows how long it will take before the alert shows

// repeat with the i nterval of 2 seconds
// let timerId = setInterval(() => alert(' tick '), 5000)
// let animal = {
//     age: 20,
//     color: "black",
//     run: function () {
//         console.log("Running")
//     }
// };
// console.log(animal.age)
// animal.run();

// let animal2 = {
//     eats: true
// };
// let rabbit = {
//     jumps: true,
//     __proto__: animal2
// };


// console.log(rabbit.eats);
// console.log(rabbit.jumps);

// let animal3 = {
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };
// let rabbit1 = {
//     jumps: true,
//     __proto__: animal3
// };
// let longEar = {
//     earLength: 10,
//     __proto__: rabbit1
// }

// longEar.walk();
// console.log(longEar.jumps);


// animal has methods
// let animal4 = {
//     walk() {
//         if (!this.isSleeping) {
//             alert(`I walk`);
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     }
// };
// let rabbit2 = {
//     name: "White Rabbit"
// };
// Object.setPrototypeOf(rabbit2, animal4);
// rabbit2.run = true

// rabbit2.sleep();
// animal4.sleep()
// console.log(rabbit2)
// console.log(rabbit2.isSleeping);
// console.log(animal4.isSleeping);


// let head = {
//     glasses: 1
// };
// let table = {
//     pen: 3,
//     __proto__: head
// };
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
// let pockets = {
//     money: 2000,
//     __proto__: bed
// };

// console.log(pockets.pen)
// console.log(bed.glasses)

// console.log(head.glasses); 
// console.log(pockets.glasses); 

// let animal = {
//     eats: true
// };
// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); // r a b b i t . proto == animal
// console.log(rabbit.eats);
// console.log(rabbit.name)

// function Rabbit(name, age) {
//     this.name = name
//     this.age = age
// }

// let rabbit = new Rabbit("tomilola", 23);
// let rabbit2 = new rabbit.constructor("White rabbit")

// console.log(rabbit)


// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         alert(this.name);
//     }
// }
// let user = new User("John");
// user.sayHi();


// class User {
//     constructor(name) {
//         // invokes the setter
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             alert("Name is too short. ");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("lover");
// alert(user.name);
// user = new User("Lovert");
// alert(user.name)

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }
//     static tomi(articleA, articleB) {
//         return articleA.date - articleB.date;
//     }
// }
// // usage
// let articles = [
//     new Article("Mind", new Date(2016, 1, 1)),
//     new Article("Body", new Date(2016, 0, 1)),
//     new Article("JavaScript", new Date(2016, 11, 1))
// ];
// articles.sort(Article.tomi);
// console.log(articles)

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed += speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stopped.`);
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }
// }

// let rabbit = new Rabbit("Black Goat")

// rabbit.run(34)

// rabbit.hide()


// try {
//     alert('try');
//     if (confirm('Make an error?')) BAD_CODE();
// } catch (e) {
//     alert('catch');
// } finally {
//     alert('finally');
// }


// console.log(document.documentElement.parentNode);

// document.addEventListener('DOMContentLoaded', function() {
//     var table = document.getElementById('table');
//     alert(table.rows[0].cells[1].innerHTML);
// });
// let users = [
//     {name: "jhon", age:24},
//     {name: "tomilola" , age: 35}
// ]

// let user = users.find(tomi=>tomi.age==35)
// console.log(user)

// let form = document.getElementsByName('my-form')[0];
// let articles = form.getElementsByClassName('article');
// console.log(articles.length ) ;

// let divs = document.querySelectorAll('div');
// console.log(divs.length) ;

// let diagonal = document.getElementById(1)
// diagonal.style.backgroundColor = 'red';

// let diagonal2 = document.getElementById(2)
// diagonal2.style.backgroundColor = 'red';

// let diagonal3 = document.getElementById(3)
// diagonal3.style.backgroundColor = 'red';

// let diagonal4 = document.getElementById(4)
// diagonal4.style.backgroundColor = 'red';

// let diagonal5 = document.getElementById(5)
// diagonal5.style.backgroundColor = 'red';  

// let test = document.getElementsByTagName("h1")

// for (let i = 0; i < test.length; i++) {
//     test[i].style.backgroundColor = 'skyblue';
// }

// const table = document.querySelector("#my-table");
// const tableRows = table.getElementsByTagName("tr")

// for (let i = 0; i < tableRows.length; i++){
//     const tableCells = 
//     tableRows[i].getElementsByTagName("td");
//     tableCells[i].style.backgroundColor = "lightGreen"
// }


// const button = document.querySelector("button");
// const header = document.querySelector("h1")
// button.addEventListener("click", whenClicked);

// function whenClicked(){
//     console.log ("Event fucntion")
// }

// window.addEventListener("keydown", (event)=>{
//     if(event.key == "k"){
//         console.log("The K key was clicked")
//     }
// })

// button.onKeydown((event) =>{
//     console.log(event.key )
// })

// document.addEventListener('DOMContentLoaded', function() {
//     const initialInput = document.querySelector('input[type="text"]:nth-of-type(1)');
//     const interestInput = document.querySelector('input[type="text"]:nth-of-type(2)');
//     const monthsSelect = document.getElementById('months');
//     const resultInput = document.getElementById('result');

//     function calculateResult() {
//         const initial = parseFloat(initialInput.value) || 0;
//         const interest = parseFloat(interestInput.value) / 100 || 0;
//         const months = parseInt(monthsSelect.value) || 0;
//         const years = months / 12;
//         const result = Math.round(initial * (1 + interest * years));
//         resultInput.value = result;
//     }

//     initialInput.addEventListener('input', calculateResult);
//     interestInput.addEventListener('input', calculateResult);
//     monthsSelect.addEventListener('change', calculateResult);
// });

$("input").on()

