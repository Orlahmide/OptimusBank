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

function checkSpam(tony){
    // let a = str.toLowerCase().includes("viagra")
    // let b = str.toLowerCase().includes("free")
    // let c = str.toLowerCase().includes("xxx")
    // return a || b || c

    if(tony.toLowerCase().includes("viagra") || tony.toLowerCase().includes("free") || tony.toLowerCase().includes("xxx")){
        return true
    }else{
        return false
    }
}

console.log(checkSpam("buy ViagRA now"))
console.log(checkSpam("free xxxxx"))
console.log(checkSpam("innocent rabbit"))
