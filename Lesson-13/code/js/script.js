document.querySelector("#sample").style.color = "pink";
document.querySelector("#sample").style.backgroundColor = "teal";
document.querySelector("#sample").style.fontSize = "20px";

// classList (add class to an element through js)
let classes = document.querySelector("#heading").classList;
console.log(classes);
classes.add("item");
classes.remove("style-heading");

//see html file
toggleClass = () => {
  classes.toggle("item");
};

validate = () => {
  //how to capture user input
  let name = document.querySelector("#name").value;
  alert(name);
};

formSubmit = (e) => {
  e.preventDefault(); //used to prevent default behavior of any event
  // "e" is event Object, get created automatically when an even fires and is available as a callback parameter.
  console.log(e);

  let age = document.querySelector("#age").value;
  document.querySelector("#text").innerHTML = age;
};

// attaching events through js
document.querySelector("#form").addEventListener("submit", formSubmit);

document.querySelector("#name").addEventListener("change", validate);

document.querySelector("#email").addEventListener("change", function (e) {
  console.log(e); //event object
  console.log(e.target); //return element on which you are attaching event
  console.log(e.target.value); //to capture user input

  e.target.style.backgroundColor = "pink";
});
