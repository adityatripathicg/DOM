

//get elements by class name
// let smallimages = document.getElementsByClassName("oldImg");
// for(let i = 0;i<smallimages.length;i++){
//     smallimages[i].src = "/Assets/Spider-Man.png";
//     console.log(" value of src changed");
// }


//getelements by tag name
// console.log(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[1].innerText = "CG Fucked!!!!";


//Query Selectors
// console.log(document.querySelector('p'));
// console.dir(document.querySelector('p'));
// console.log(document.querySelector('.pubInfo'));//mainImg
// console.log(document.querySelector('#mainImg'));
// console.log(document.querySelectorAll('p'));


//innerText, textContent and innerHTML
// let para = document.querySelector('p');
// console.log(para.innerText);
// console.log(para.textContent);
// console.log(para.innerHTML);
// let heading = document.querySelector('h1');
// heading.innerHTML = "<u>Spider Man</u>";


// Manipulating Attributes
// let img = document.querySelector("img");
// console.log(img.getAttribute("id"));
// console.log(img.setAttribute("id","spidermanimg"));
// console.log(img.getAttribute("id"));
// console.log(img);


// //manipulating style
// let links = document.querySelectorAll('.pubInfo a');
// // for(let i = 0;i<links.length;i++){
// //     links[i].style.color = "yellow";
// // }
// for (link of links){
//     link.style.color = "green";
// }


// //using classlist
// let heading = document.querySelector("h1");
// console.log(heading.classList);
// //console.log(heading.classList.add("green"));
// console.log(heading.classList.contains("green"));
// console.log(heading.classList.toggle("green"));// adds class if not exists, if class exists toggle removes it


//Navigation
let img = document.querySelector("img");
console.log(img.previousElementSibling.style.color = "yellow");
console.log(img.children);
console.log(img.parentElement);
console.log(img.nextElementSibling);