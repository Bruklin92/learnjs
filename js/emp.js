let update = null;

const display = () => {

    let localdata = JSON.parse(localStorage.getItem("emp"));

    let print = `<table border = "1"><tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Act</th>
       </tr>`

       console.log(localdata);
       
  
       localdata.map((v) => {
    print+=`
       <tr>
            <td>${v.name}</td>
            <td>${v.age}</td>
            <td>${v.salary}</td>
            <td><button onclick="handledelete(${v.id})">X</button> <button onclick="handleupdate(${v.id})">E</button></td>
        </tr>`
          '</table>';

    })
    document.getElementById("disp").innerHTML=print;
}

const handledelete = (id) => {
    let localdata = JSON.parse(localStorage.getItem("emp"));
    
    console.log(localdata);   

    let index = localdata.findIndex((v) => v.id === id);
    
    console.log(index);
    
    localdata.splice(index,1);

    localStorage.setItem("emp",JSON.stringify(localdata));


    display();
}

const handleupdate = (id) => {
    console.log(id);

    let localdata = JSON.parse(localStorage.getItem("emp"));

    console.log(localdata);

    let obj = localdata.find((v) => v.id === id);
    
    document.getElementById("name").value = obj.name;
    document.getElementById("age").value = obj.age;
    document.getElementById("salary").value = obj.salary;

    update = id;

}

const handlesubmit = () => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let salary = parseInt(document.getElementById("salary").value);

    let obj = {
        id: Math.floor(Math.random() * 100),
        name,
        age,
        salary
    }

    let localdata = JSON.parse(localStorage.getItem("emp"));

    if (update === null) {
        if (localdata) {
            localdata.push(obj);
            localStorage.setItem("emp",JSON.stringify(localdata));
        } else {
            localStorage.setItem("emp",JSON.stringify([obj]));
        }
    } else {
        let index = localdata.findIndex((v) => v.id === update);        

        localdata[index] = obj;

        localStorage.setItem("emp", JSON.stringify(localdata));

        update = null;

    }
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("salary").value = '';

    display();

}

let emp = document.getElementById("empform");
emp.addEventListener("submit",handlesubmit);

window.onload = display;