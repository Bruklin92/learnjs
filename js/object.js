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
//        name: "Amit",
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

// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((v) => {
//     console.log(v.name, v.age);
// })


// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// }

// for (let k in data) {
//     if (k === "personal_info") {
//        for (let j in data[k]) {
//         console.log(data[k][j]); 
//        }
//     } else if (k === "courses") {
//        data[k].map((v) => console.log(v));
//     } else if (k === "branches") {
//         for (let i in data[k]) {
//             console.log("Branches : ",i);
//             console.log("Admission : ",data[k][i].admission);
//             console.log("Vacant_seat : ",data[k][i].vacant_seat);
//         }        
//     }
// }

let institues = [
    {
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'XYZ IT Institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            },
        ]
    },
    {
        name: 'PQR IT Institute',
        seat: [
            {
                react: 7,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'MNP IT Institute',
        seat: [
            {
                react: 0,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
]

let ans = institues.map ((v) => {
    return{
        name: v.name,
        seat: v.seat.map((v) => Object.entries(v).filter([k][vl]) => vl>0 )   
    }
})
 console.log(ans);
 
















// institues.map((v) => {
//     console.log(v.name);
//     v.seat.map((v1) => {
//         for (let k in v1) {
//             console.log(k,v1[k]);   
//         }
//     })
// })


// let obj = {
//     age : 20,
//     roll : 15,
//     city : 'surat',
// }

// console.log(Object.keys(obj));                                      //return key 
// console.log(Object.values(obj));                                    //return value
// console.log(Object.entries(obj));                                   //return array properties (key:value)        
// console.log(Object.fromEntries(Object.entries(obj)));               //return object
// Object.freeze(obj);                                                 //freeze object



