// // DOM selectors

// // get elements by tagname 

// let elements = document.getElementsByTagName("h1")
// console.log(elements)

// elements[0].innerHTML = "this string is setted using js"

// console.log(elements[0].innerHTML)

// // get element/s by classname

// let classElements = document.getElementsByClassName("first")

// console.log(classElements)

// // get element by id

// let element = document.getElementById("i1")

// console.log(element)

// // querySelector
// // querySelectorAll

let a = document.getElementsByTagName("img")

console.log(a[0])

let b = document.getElementsByClassName("first_img")

console.log(b)

let c = document.getElementById("img1")

// console.log(c.innerHTML)

c.src = "https://picsum.photos/id/238/200/300"


let d = document.getElementById("d1")

d.onclick = ()=>{
    d.className = "color2"
}