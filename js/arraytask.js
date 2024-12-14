// let a = [10, 20, 30, 40, 50];

// 1.    Finding the maximum element in an array.

// let ans = Math.max(...a);
// console.log(ans);

// let ans = a.reduce((a,b) => b-a);
// console.log(a[0]);


// 2.    Finding the minimum element in an array.

// let ans = Math.min(...a);
// console.log(ans);

// let ans = a.reduce((a,b) => b+a);
// console.log(a[0]);


// 3.    Sorting an array in ascending order.

// let ans = a.sort((a,b) => a-b);
// console.log(a);


// 4.    Sorting an array in descending order.

// let ans = a.sort((a,b) => b-a);
// console.log(ans);

// 5.    Reversing an array.

// let ans = a.reverse();
// console.log(ans);

// 6.    Finding the sum of all elements in an array.

// let ans = a.reduce((acc, v, i) => acc+v,0);
// console.log(ans);

// 7.    Finding the average of all elements in an array.

// let ans=a.reduce((acc,v,i) => acc+v, 0);
// console.log(ans/a.length);

// 8.    Checking if an array contains a specific element.

//  let a=[10,20,30,40,50,50,60];
// let ans=a.includes(50);
// console.log(ans);

// 9.    Removing duplicates from an array.

    // let emptyArray=[];
    // for(let i=0; i<a.length;i++){
    //     if(!emptyArray.includes(a[i])){
    //         emptyArray.push(a[i])
    //     }
    // }
    // console.log(emptyArray);

//---------------------------------------HOME---------------------------------------------//

// 10.    Merging two arrays into a new array.

// let a2=[1,2,3,4];
// let ans=a.concat(a2);
// console.log(ans);



// 11.    Splitting an array into two arrays based on a condition.

let arr=[1,2,3,4,5,6,7,8,9,10];
let a1 = [];
let a2 = [];
let ans = arr.reduce((even,odd,num) => {
    if(num%2==0){
        even.push(num);
    } else {
        odd.push(num);
    }
});
console.log(arr);



// 12.    Rotating an array by a given number of positions.


// 13.    Finding the second largest element in an array.

// let a=[10,20,30,40,50]
// let ans= a.sort((a,b) => b-a);
// console.log(a[1]);

// let a = [1, 2, 3, 4];
// let a2 = [1, 2, 3, 4];
// let ans = a.length === a2.length && a.every((value, index) => value === a2[index]);
// console.log(ans);

// 17.    Finding the index of the first occurrence of an element in an array.

// let a = [10, 20, 30, 40, 50, 30];
// let ans = a.indexOf(30);
// console.log(ans);  

// 18.    Finding the index of the last occurrence of an element in an array.

// let a = [10, 20, 30, 40, 50, 30];
// let ans = a.lastIndexOf(30);
// console.log(ans);  

// 24.    Finding the first three maximum number's sum an array.

// let a = [10, 20, 40, 30, 50, 40];
// a.sort((a, b) => b - a);
// let sum = a[0] + a[1] + a[2];
// console.log(sum);
