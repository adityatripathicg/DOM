//video
let p2 = document.createElement("p");
p2.innerText = "Hey I'm Red!";
p2.style.color = "red";
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
body.append(p2);
let h3 = document.createElement("h3");
h3.innerText="I'm a blue H3";
h3.style.color = "blue";
let p = document.querySelector("p");
p.prepend(h3);
let div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
div.style.height = "100px";
div.style.width = "200px";
body.append(div);
let ih1 = document.createElement("h1");
ih1.innerHTML = "I'm in a div";
let ip = document.createElement("p");
ip.innerText = "ME TOO!"
div.appendChild(ih1);
div.appendChild(ip);
//ass q1
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";
body.append(input);
body.append(btn);

//q2
input.placeholder = "username";
btn.setAttribute("id", "btn");
//q3
let btn2 = document.querySelector("#btn");
btn2.style.backgroundColor = "blue";
btn2.style.color = "white";
//q4
let qh1 = document.createElement("h1");
qh1.innerHTML = "<u>Aditya CG Tripathi</u>";
qh1.style.color = "purple";
body.append(qh1);
//q5
let p3 = document.createElement("p");
p3.innerHTML = "Aditya <b>CG</b> Tripathi";
body.append(p3);