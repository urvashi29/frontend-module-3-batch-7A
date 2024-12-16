//

// throttle function
function throttle(delay) {
  let timeoutId;

  return function () {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        // this is referring to input sbox
        console.log(this); //here, we will write logic for search api
        timeoutId = null;
      }, delay);
    }
  };
}

const getName = throttle(4000); //getName is function

document.querySelector("#name").addEventListener("keyup", getName);

//debouncing
function debounce(delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      // this is referring to input box
      console.log(this); //here, we will write logic for search api
    }, delay);
  };
}

const getAge = debounce(2000); //

document.querySelector("#age").addEventListener("keyup", getAge);
