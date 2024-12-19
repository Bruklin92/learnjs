// let obj = {
//     age : 20,
//     roll : 15,
//     city : 'surat',
// }

// console.log(obj["age"]);

//access all object 

// for (let k in obj) {
//     console.log(k,obj[k]);
// }

// add
// obj.block = 304;

//update    
// obj.age = 23;

//delete
// delete obj.age;


// const person = {
//     name: "amit",
//     Age : "20"
// }

// console.log(person.name, person.Age);


// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((v) => {
//     console.log(v.name, v.age);
// })


// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }  
// ]  

// person.map((v) => {
//     console.log(v.name, v.age);
//     for (let k in v.course) {
//         console.log(v.course[k]);
//     }
// })

// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

// for (let k in myObj) {
//     if (k === 'cars'){
//         for (let j in myObj[k]) {
//             console.log(myObj[k][j]);
//         }
//     } else {
//         console.log(myObj[k]);
//     }
// }

const person =[
    {
        name:"amit",
        age:19,
        course:{
            c1: "c",
            c2: "html"
        }
    },
    {
        name:"mayur",
        age:20,
        course:{
            c1: "c",
            c2: "html"
        }
    }
];

person.map((v) => {
    
})