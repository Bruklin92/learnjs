// let arr1 = [10,8,61,31,5];

// 1. Change 61 to 20.

// arr1[2] = 20;
// console.log(arr1);


// 2. Delete 8

// let ans = arr1.splice(1,1);
// console.log(arr1);


// 3. Add 20,30,40 after 10

// let ans = arr1.splice(1, 0, 20, 30, 40);
// console.log(arr1);


// 4. Find index of 5

// let ans = arr1.indexOf(5);
// console.log(ans);


// 5. Search 99 is available or not

// let ans = arr1.includes(99);
// console.log(ans);5

//---------------Q2--------------------//

// let arr2 = [10,20,30,40,50];
// let arr3 = [6,9,80];

// 1. Combine arr2 and arr3

// let ans = arr2.concat(arr3);
// console.log(ans);


// 2. Get 20, 30, 40 as array from arr2

// let ans = arr2.slice(1,4);
// console.log(ans);


// 3. Give sum of all element of arr3 using reduce function

// let ans = arr3.reduce((acc, v, i) => acc+v, 0);
// console.log(ans);


// 4. Check all element is greater than 10 or not from arr3

// let ans = arr3.every((i,v) => v > 10);
// console.log(ans);


// 5. Sort arr3 in descending order.

// let ans = arr3.sort((a,b) => b-a);
// console.log(ans);10

//---------------Q3--------------------//

// let arr = [10, 20, 30, 40, 50];

// 1. Removing duplicates from an array.

// let arr = [10, 20, 20, 30, 30, 40, 50];

// let arr1=[];
//     for(let i=0; i<arr.length; i++){
//         if(!arr1.includes(arr[i])){
//             arr1.push(arr[i])
//         }
//     }
// console.log(arr1);


// 3. Checking if an array is sorted in ascending order.

// let a1 = arr.sort((a,b) => a-b);
// console.log(a1);


// 4. Finding the third largest element in an array.

// let ans = arr.sort((a,b) => b-a);
// console.log(ans[2]);


// 5. Finding the first three maximum number's sum an array.

// arr.sort((a,b) => b-a);
// let max = arr.slice(0, 3);
// let ans = max.reduce((acc, v, i) => acc+v,0);
// console.log(ans);6




// Q-4 Create a todo list that add, display, sort a todo.


// function handlesubmit() {
//     event.preventDefault();

//     let print;
//     let text = document.getElementById("text").value;
//     console.log(text);
//     for (let i=0; i<text[i]; i++) {
//         text.push("text");
//     }
//     print+=
//      document.getElementById("disp").innerHTML=text;

// }5

30