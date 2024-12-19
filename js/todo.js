let tododata = [];
let update = null;

const handleupdate = (i) => {
    tododata[i] = todo;    
    display();
    update = i;
    
}

const display = () => {
    
    let print = '<ul>'
    tododata.map((v, i) => {
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