// // Array for , for of, forEach 

// let  numbers = [1,2,3,4,5,6,7,8,9,10]

// let evenNumbers = numbers.filter((number)=>{
//     if(number % 2 == 0){
//         return number
//     }
// })

// let displayArrayFunction = (e , i) =>{
//     console.log(e +' is at '+ i)
// }

// numbers.map(displayArrayFunction)

// console.log(evenNumbers)

// objects in js

// let obj = {
//     key:value,
//     key:value,
//     key:value,
//     key:value,
//     key:value
// }

// obj.key()

let student = {
    name: "amey",
    roll: 10,
    class: "FSD1",
    subject: "Maths",
    Attendence: () => {
        console.log("present sir/madam !")
    }
}

// console.log(student.name)
// console.log(student.roll)
// console.log(student.class)
// console.log(student.subject)
// student.Attendence()

// object itration

// using for in

// for (let field in student) {
//     // console.log(field)
//     // console.log(student[field])
//     console.log(field + " : " + student[field])
// }

// destructure a array

// let [name, roll, class1, subject, Attendence] = ["amey", 10, "FSD1", "Maths", () => {
//     console.log("present !")
// }]

// console.log(name)
// console.log(roll)
// console.log(class1)
// console.log(subject)
// Attendence()

// let [a, b, c, d, e] = [1, 2, 3, 4, 5]

// console.log(a)

// Array of Objects 

let classRoom = [
    { student_name: "student1", student_roll: 1, student_subject: "Maths", student_marks: 40 },
    { student_name: "student2", student_roll: 2, student_subject: "English", student_marks: 50 },
    { student_name: "student3", student_roll: 3, student_subject: "Science", student_marks: 70 },
    { student_name: "student4", student_roll: 4, student_subject: "Hindi", student_marks: 80 },
    { student_name: "student5", student_roll: 5, student_subject: "Maths", student_marks: 34 },
    { student_name: "student6", student_roll: 6, student_subject: "English ", student_marks: 22 },
    { student_name: "student7", student_roll: 7, student_subject: "Maths", student_marks: 30 },
    { student_name: "student8", student_roll: 8, student_subject: "Science", student_marks: 70 },
    { student_name: "student9", student_roll: 9, student_subject: "Hindi", student_marks: 66 },
    { student_name: "student10", student_roll: 10, student_subject: "Maths", student_marks: 95 }
]

let passStudent = classRoom.filter((student)=>{
    if(student.student_marks > 35){
        return student
    }
})

let failedStudent = classRoom.filter((student)=>{
    if(student.student_marks < 35){
        return student
    }
})

console.log(passStudent)
console.log(failedStudent)

// array sort

let newArr = [0,5,6,4,3,7,2,1,9,10,8]

console.log(newArr)