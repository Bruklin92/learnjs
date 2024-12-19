let tododata = [];
let update = null;

const handleupdate = (i) => {
    console.log(i);
    document.getElementById("todo").value = tododata[i];
    display();
    update = i;    
}

const display = (fdata) => {

    let finaldata = fdata ? fdata : tododata;

    let print = '<ul>'
    finaldata.map((v, i) => {
        print+=`<li>${v} <button onclick="handleupdate(${i})">E</button> <button onclick="handledelete(${i})">x</button></li>`;
    })
    '</ul>';
    document.getElementById("disp").innerHTML=print;
}

const handledelete = (i) => {
    tododata.splice(i,1);
    console.log(i);
    
    display();
}

const handletodo = () => {
    event.preventDefault();

    const todo = document.getElementById("todo").value;
    
    if (todo) {
        console.log(tododata);

        if (update === null) {
            tododata.push(todo);
        } else {
            tododata[update] = todo;
            update=null;
        }

        display();
        document.getElementById("todoerr").innerHTML = "";
        document.getElementById("todo").value = "";
    } else {
        document.getElementById("todoerr").innerHTML = "please enter todo";
    }

}  

const handlekey = () => {
    let serch = document.getElementById("serch").value;    

    let fdata = tododata.filter((v) => v.toLowerCase().includes(serch.toLowerCase()));
    display(fdata); 
}

const handlesort = () => {
    const sdata = document.getElementById("sort").value;

    if (sdata === "az") {
        const sdata =  tododata.sort(); 
        console.log(sdata);
        display(sdata);
    } else if (sdata === "za") {
        const sdata = tododata.sort().reverse(); 
        console.log(sdata);
        display(sdata);
    }
}