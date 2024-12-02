// Event Propogation
// Event Delegation
// Node Types
// Text Content, innerHTML

// addEventListener(event name, callback fn, boolean)

// by default event bubbling (false): outward
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   function (e) {
//     console.log("grand parent", e.target);
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   function (e) {
//     console.log("parent", e.target);
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   function (e) {
//     console.log("child", e.target);
//   },
//   false
// );

// event capturing (true): inward direction
// document.querySelector("#grandparent").addEventListener("click", function (e) {
//   console.log("grand parent", e.target);
// }, true);

// document.querySelector("#parent").addEventListener("click", function (e) {
//   console.log("parent", e.target);
// }, true);

// document.querySelector("#child").addEventListener("click", function (e) {
//   console.log("child", e.target);
// }, true);

//stopPropagation()
document.querySelector("#grandparent").addEventListener(
  "click",
  function (e) {
    console.log("grand parent", e.target);
  },
  false
); //

document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    console.log("parent", e.target);
    e.stopPropagation();
  },
  false
); //

document.querySelector("#child").addEventListener(
  "click",
  function (e) {
    console.log("child", e.target);
    e.stopPropagation();
  },
  true
); //

//remove event from an element
// document.querySelector("#child").removeEventListener("click", function (e) {
//   console.log("child", e.target);
// }); //

// Event Delegation
const buttons = document.querySelectorAll("button");
console.log(buttons);

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     console.log(e.target.innerHTML);
//   });
// });

//another example
const div = document.querySelector("#sample");

div.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  console.log(e.target);
});

// textContent, innerHTML, innerText
console.log(document.querySelector("#grandparent").innerHTML); //select the element content
console.log(document.querySelector("#grandparent").textContent);
console.log(document.querySelector("#grandparent").innerText);
