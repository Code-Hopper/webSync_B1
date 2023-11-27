// This is first js class 

// alert("External JS")

// variables

// scope variable_name = data;

// var public { let const } protected

// var a = 10;

// let a = 10;

// let b = 20;

// // let c = a + b;

// const c = a + b;

// a = "Amey";

// statements & expresions

// output function
// this are pre-defined function to prompt the output of something

// alert, console.log, document.write

// alert(c)

// console.log(c)

// document.write(c)

// datatypes

// primitive data types 

// number , string , boolean, null, undefined

// non-primitive data types

// array , objects, function

// number -Infinity to Infinity

// integers - 22 1 22 5 77 98 63 
// floats - 2.1 2 2.3 2.0 54684 35468 3434

// let x = 123456

// console.log(x)
// typeof(x) // this function does not return the output we must put it under some output function 
// console.log(typeof(x))

// String 

// collection of charchter , that can be just alphabets / number / alphanumeric / this do content symbols 

// string has to be written in qoutes either '' or ""

// let y =  "Some string value 12345"

// console.log(y);
// console.log(typeof(y))

// // Boolean

// // either true or flase

// let z = true;

// let w = false;

// console.log(z)
// console.log(typeof(z))


// console.log(w)
// console.log(typeof(w))


// let a = Number(prompt("Enter some value"))

// // 1 9456653453 45343545
// // "1a" 1a - NaN
// // let a = prompt("Enter some value")

// console.log(typeof(a)) // NaN
// console.log(a)

// object

// let student = {
//         roll: 1,
//         class: "A1",
//         subject: "Maths"
// }

// console.log(student.roll)

// console.log(student.class)

// console.log(student.subject)

// console.log(typeof (student))

// array 

// collection of similar/same type data

// let arr = [ element, element ,element,element, ... ]

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// console.log(nums)
// console.log(typeof(nums))

// let class_a1 = [
//         {
//                 roll: 1,
//                 class: "A1",
//                 subject: "Maths"
//         },
//         {
//                 roll: 2,
//                 class: "A1",
//                 subject: "Maths"
//         },
//         {
//                 roll: 3,
//                 class: "A1",
//                 subject: "Maths"
//         },
//         {
//                 roll: 4,
//                 class: "A1",
//                 subject: "Maths"
//         }
// ] 

// string concatation

// let my_name = prompt("Enter some name");

// let my_age = prompt("Enter your age");

// let some_data = "Hello world !, my name is " + my_name + ". My age is "+ my_age + "." 

// console.log("Hello world !, my name is " + my_name + ". My age is "+ my_age + "." )

// document.write("Hello world !, my name is " + my_name + ". My age is "+ my_age + "." )

// alert("Hello world !, my name is " + my_name + ". My age is "+ my_age + "." )

// console.log(some_data)
// console.log(my_name)

// oprators

// 1.Arithmatic Oprators + - * / %
// 2.Increment & Decrement ++ -- , pre ++a , post a++, pre --a, post a--
// 3.Conditonal Oprators < > <= >= != == ===
// 4.Logical Oprators & || !
// 5.Relarional Oprators .
// 6.Assignment Oprators =
// 7.Ternary Oparator ?

// let a = 10;

// let b = 20;

// let c = a + b;

// console.log(c)

// console.log(a + b)

// post increment and decrement

let x = 10;

console.log(x++) //10
console.log(x++) //11
console.log(x) //12
// console.log(x) //12

let y = 10;

console.log(y--)
console.log(y--)
console.log(y)
console.log(y)

// pre increment and decrement

let p = 10

console.log(++p)
console.log(++p)
console.log(p)

let q = 10

console.log(--q)
console.log(--q)
console.log(q)

// = expresion, condition - statement  

// condition statement: 1.condition statement 2.looping statement

// if, if-else, if-else_if, if-else-if-ladder, nasted if, switch case, ternary statement


// if(condition == true){
//     // true code 
// }

// nextline

let a = 500;

let b = 300;

let c = 200;

let d = 50;

// if(a > b){
//     console.log("A is greater")
// }else{
//     console.log("B is greater")
// }


// console.log("Program Completed")

// nasted if

// if(a > b){
//     if(a > c){
//        console.log("A is greater than B & C !") 
//     }
// }

// if(a > b){
//     if(a > c){
//        console.log("A is greater than B & C !") 
//     }else{
//        console.log("C is greater than B & A !") 
//     }
// }else if(b > c){
//     console.log("B is greater than A & C !") 
// }else{
//     console.log("C is greater than B & A !") 
// }

if (a > b) {
    if (a > c) {
        if (a > d) {
            console.log("A is greater than B , C & D !")
        } else {
            console.log("D is greater than B , C & A !")
        }
    } else if (c > d) {
        console.log("C is greater than B , A & D !")
    } else {
        console.log("D is greater than B , C & A !")
    }
} else if (b > c) {
    if (b > d) {
        console.log("B is greater than A , C & D !")
    } else {
        console.log("D is greater than B , A & c !")
    }
} else if (c > d) {
    console.log("C is greater than A & B , D !")
} else {
    console.log("D is greater than B , A & C !")
}