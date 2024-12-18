
const handleclick = () => {
    let ans = document.getElementById("click").value;
    console.log(ans);
    
}

const handleover = () => {
    let hello = document.getElementById("hello").value;
    console.log(hello);
    
}

const handlemouse = () => {
    let out = document.getElementById("out").value
    console.log(out);
    
}

const handlemoused =() => {
    let down = document.getElementById("down").value
    console.log(down);
}

const handlemoup =() => {
    let up = document.getElementById("up").value
    console.log(up);
}


const handlemove =() => {
    let move = document.getElementById("move").value
    console.log(move);
}

const handlekey = () => {
    let key = document.getElementById("age").value;
    console.log(key);
    
}

const handleky = () => {
    let ky = document.getElementById("num").value;
    console.log(ky);
}

const handlefocuse =() => {
    document.getElementById("foc").style.backgroundColor = "red";
}

const handleblure =() => {
    document.getElementById("foc").style.backgroundColor = "white";
}

const handlecontry = () => {
    let cont = document.getElementById("cont").value;
    console.log(cont);
}

window.onload = function() {
    }
window.onresize=function() {
    console.log(window.outerHeight, window.outerWidth);
    
}