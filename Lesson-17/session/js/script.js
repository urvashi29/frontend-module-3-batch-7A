// axios
// fetch
// Promise chaining
// Promise.all
// Promise.race

document.querySelector("#btn").addEventListener("click", async function () {
  const url = "https://dummyjson.com/products";

  //   axios
  //     .get(api)
  //     .then(() => {})
  //     .catch(() => {});

  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log(response.data.products);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // axios using try & catch, async await
  try {
    const response = await axios.get(url);
    console.log(response.data.products);
  } catch (err) {
    console.log(err);
  }

  //   const obj = {
  //     headers: {

  //     },
  //     body: {

  //     }
  //   }
  axios
    .post("url", obj)
    .then(() => {})
    .catch(() => {});

  //on rapid api
  // axios.request(obj);
});

// fetch
function getUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// getUsers();

async function getPosts() {
  let url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// getPosts();

function fetchUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("error" + response.status);
      }
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchUsers();

// post request with fetch
// fetch(api, {
//   method: "POST",
//   headers: {},
//   body: {},
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all
const promise1 = Promise.resolve(10);

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("hello");
  }, 1000);
});

Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
});

Promise.race([promise1, promise2]).then((values) => {
  console.log(values);
});

//Promise chaining
// fetchData(api)
//   .then((data) => {
//     console.log(data);
//     return fetchData(api);
//   })
//   .then((otherData) => {
//     console.log();
//     return fetchData(api);
//   })
//   .then(() => {})
//   .catch(() => {});

function fetchData(url) {
  return fetch(api);
}

//Task:
//use Axios: Try get the data movie API, E-commerce and display in UI (Rapid Api & fake Store API)
//use Fetch: Get the data from user and do post request, display in UI "Account Registered"
