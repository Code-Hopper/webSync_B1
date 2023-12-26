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

// d.onclick = ()=>{
//     // d.className = "color2"
//     d.style.background = "linear-gradient(red,blue)"
//     d.style.width = "1000px"
// }

let btn = document.getElementById("btn1")

btn.onclick = ()=>{
    // d.className = "color2"
    d.style.background = "linear-gradient(red,blue)"
    // d.style.width = "1000px"
}


let submit_button = document.getElementById("sbtn")

submit_button.onclick = ()=>{
    console.log(document.getElementById("in1").value)

    document.getElementById("greetUser").innerHTML = `Hello , ${document.getElementById("in1").value} welcome to some where.`
}

console.log(document.getElementById("d2").dataset)