
//create element
// let a = document.createElement("spam");
// a.innerText = "hello";

//setAttribute
// a.setAttribute("id", "domoclass")
// console.log(a);

//createnode
// let node = document.createTextNode("water");
// a.appendChild(node);
// console.log(a);

// document.body.appendChild(a);


const handlesubmit = () => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    console.log(name);
    let element = document.createElement("p");    
    let nod = document.createTextNode(name);
    element.appendChild(nod);    
    document.getElementById("disp").appendChild(element)
}


const dom = document.getElementById("dom");
dom.addEventListener("submit",handlesubmit);