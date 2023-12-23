// let a = 10;
// let b = 20;

// // console.log("the value of a is " + a + " this is cool the value of b is "+b)

// console.log(`the value of a is ${a} the is cool the value of b is ${b}`)

// built in date class

let date = new Date()

console.log(`${date}`)

// console.log(`${date.getDate()}`)

// date.setDate(20)

console.log(`${date.getDate()}`)

// console.log(`${date.getTime()}`)

// date.setDate(20)

// console.log(`${date.setTime()}`)

// date.setHours(13)

let greet_time = date.getHours()

console.log(greet_time)

if (greet_time < 12) {
    console.log("good morning")
} else if (greet_time > 12 && greet_time < 16) {
    console.log("good afternoon")
} else {
    console.log("good night")
}

// date.setDate(20)

// console.log(`${date.getDate()}`)


// console.log(date.)

// sync and async functions/programming 

// setinterval interval methods

// setInterval(() => {

//     let date2 = new Date()

//     document.getElementById("time").innerHTML = date2.toLocaleTimeString()

// }, 1000)

// setTimeout(() => {
//     console.log("hello world")
// }, 2000)


// setInterval(() => {

//     setTimeout(() => {
//         console.log("hello world")
//     }, 2000)

// }, 1000)

// js promises / async await function

let nums = [4, 1, 2, 4, 6, 7, 3, 2, 8, 9, 10]

// accesding array 
// nums.sort((prevIndex, nextIndex) => {
//     console.log(`The prev index is : ${prevIndex} and the next index is ${nextIndex}`)
//     return prevIndex - nextIndex
// })

// dusra array
nums.sort((prevIndex, nextIndex) => {
    console.log(`The prev index is : ${prevIndex} and the next index is ${nextIndex}`)
    return nextIndex - prevIndex
})

console.log(`nums array after sorting : ${nums}`)

