let arr = [];

const display = () => {
    let print = `<table border = "1"><tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Act</th>
       </tr>`
  
    arr.map((v, i) => {
    print+=`
       <tr>
            <td>${v.name}</td>
            <td>${v.age}</td>
            <td>${v.sal}</td>
            <td><button onclick="handledelete(${i})">X</button> <button onclick="handleupdate(${i})">E</button></td>
        </tr>`
          '</table>';

    })
    document.getElementById("disp").innerHTML=print;
}

const handleupdate = (i) => {
    console.log(i);
    document.getElementById("obj").value = arr[i];
    display();
    update = i;
}

const handledelete = (i) => {
    arr.splice(i,1);
    display();
}

const handlesubmit = () => {
    event.preventDefault();

    let nm = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let sal = document.getElementById("sal").value;
    

    let obj = {
        name: nm,
        age: age,
        sal: sal
    }
    arr.push(obj);
    console.log(arr);
    
    
    if (nm) {
        document.getElementById("nerr").innerHTML = "";
    } else {
        document.getElementById("nerr").innerHTML = "please enter name";
    }
    
    if (age) {
        document.getElementById("aerr").innerHTML = "";
    } else {
        document.getElementById("aerr").innerHTML = "please enter age";
    }

    if (sal) {
        document.getElementById("serr").innerHTML = "";
    } else {
        document.getElementById("serr").innerHTML = "please enter salary";
    }
    display();

}

