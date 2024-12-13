// let a=[1, 2, 3, 4, 52, 5];
// let a2=new Array(5, 4, 3, 2, 1);
// console.log(typeof a2);                                     //OBJECT

// console.log(a.length, a);

// console.log(a);

// console.log(a[1], a[3]);

// // itretion                            elemente accesser

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// a.forEach((v, i) => {
//     console.log(i,v);
// });

// a.map((v,i) => console.log(i,v));

// add the element
// let ans = a.push(100);                      //add at last
// let ans = a.unshift(100);                   //add at first
// let ans = a.splice(3, 0, 100);              //add spacific position

//remove element 
// let ans = a.pop();                         //remove at last
// let ans = a.shift();                       //remove at first
// let ans = a.splice(2, 1);                  //remove a specific element

//update element
// a[2] = 100;
// console.log(a);

// let ans = Array.isArray(a);                   //chake array or not 
// let ans = a.concat(a2);                      //combine a multipat arraies

//cheak
// let ans = a.some((v) => v>50)               //return boolean
// let ans = a.find((v) => v>500)               // return value of first match in array
// let ans = a.includes(1);                     // return boolean for spesific element of array
// console.log(ans);

//-----------------------------home------------------------------------------------//

// slice                                            //retun a selected elment of array
// const sub = ["oop", "os", "dpa", "java", ".net"];   // return part of array
// const book = sub.slice(1, 3);
// console.log(book);

// const a = [1, 2, 3, 4, 5];
// const n = a.slice(2, 4);
// console.log(n);

//map                                     //transfer into sqrtroot
// const a = [4, 9, 16, 25];
// const n = a.map(Math.sqrt)
// console.log(n);

//filter                                          //filtering array       //return value
//const a = [1, 2, 3, 4, 5];
// const n = a.filter(2, 4);
// console.log(n);

//reduce                                          //return value
// const a = [1, 2, 3, 4, 5];
// const n = a.reduce((acc, v, i) => acc+v, 0);
// console.log(n);

// indexof                                   // return first index of array elemnet    //return index
// const sub = ["oop", "os", "dpa", "java", ".net"];
// let index = sub.indexOf("dpa");
// console.log(index);

// const a = [1, 2, 3, 4, 5];
// const n = a.indexOf(2);
// console.log(n);

// Lastindexof                                   // return last index of array elemnet    //return index
// const sub = ["oop", "os", "dpa", "java", "dpa"];
// let lastindex = sub.lastindexOf("dpa");
// console.log(index);

//every                                          //return true if all element fulfilled the comndition   //return boolean
//const a = [10, 20, 30, 40, 50];
// const n = a.every((v) => v>5);
// console.log(n);

//findindex                                       //return the first index of element
//const a = [10, 20, 30, 40, 50];
// const n = a.findindex((v) => v>5);
// console.log(n);

//fill                                      //new array of element
// const sub = ["oop", "os", "dpa", "java", ".net"];
// sub.fill("nodejs");
// console.log(sub);

// const a = [1, 2, 3, 4, 5];
// a.fill(10);
// console.log(a);

//sort                                   //sort an array in alphabetes        //return arry
// const sub = ["oop", "os", "dpa", "java", "node"];
// sub.sort();
// console.log(sub);

// const a = [4, 1, 5, 2, 3];            //for numberes
// a.sort((a,b) => a-b);
// console.log(a);

//reverse                                     // return the reverseorder of array element         //return arry
// const sub = ["oop", "os", "dpa", "java", ".net"];
// sub.reverse();
// console.log(sub);

// const a = [1, 2, 3, 4, 5];
// a.reverse();
// console.log(a);