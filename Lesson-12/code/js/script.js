//display
// alert("Hello World");//alert box
// console.log('hello');//debugging
// document.write("<h2>Hello</h2>");//testing

//DOM Selector
// getElementById
let pElement = document.getElementById("display");
console.log(pElement);
console.log(typeof pElement);

//element content through js
pElement.innerHTML = "Almabetter!";

//getElementsByClassName
let items = document.getElementsByClassName("item");
console.log(items);
console.log(items.length);

let listArr = [];
for (let i = 0; i < items.length; i++) {
  console.log(items[i].innerHTML);
  listArr.push(items[i].innerHTML);
}

console.log(listArr);

//getElementsByTagName
console.log(document.getElementsByTagName("p"));

//querySelector(css selector): selects only 1 element
console.log(document.querySelector(".item"));
console.log(document.querySelector("#display"));

//querySelectorAll():
console.log(document.querySelectorAll("ul > li"));

//creating an element through js
let divElement = document.createElement("div"); //<div></div>
console.log(divElement);
divElement.innerHTML = "JavaScript DOM Element"; //<div>JavaScript DOM Element</div>
console.log(divElement);

document.body.appendChild(divElement);

document.body.prepend(divElement);

//create image element, manipulating attributes
let img = document.createElement("img"); //<img>
// img.src =
//   "https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
// img.alt = "pattern";

//set the attribute for the element
img.setAttribute(
  "src",
  "https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
);

pElement.before(img);
// pElement.after();

//element.removeAttribute("attr value");

//access attribute value of any element
console.log(document.querySelector("#para").getAttribute("title"));

//delete node
document.querySelector("li:last-child").remove(); //wherever <li> is present as a last child

console.log(window.document);
