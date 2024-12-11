// GET Request
// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001
// https://dummyjson.com/products
// https://rapidapi.com/ -> movie api

// POST request
// https://reqres.in
//  {
//   name: "morpheus",
//   job: "leader",
// };

// Status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// HTTP methods: get(), post(), update()/post(), delete()

// api call using ajax
$(document).ready(function () {
  //api call get
  //meta info
  // $.ajax({
  //   url: "https://jsonplaceholder.typicode.com/users",
  //   method: "GET",
  //   dataType: "json",
  //   headers: {
  //     apiKey: "HYIOFI-FEUEI799UDIEDOE",
  //     contentType: "",
  //     Authorization : "iuIOIOIO "
  //   }̣,
  //   success: function (response) {
  //     console.log(response);
  //   },
  //   error: function (err) {
  //     console.log(err);
  //   },
  // });

  //get request with get() method
  // $.get("https://jsonplaceholder.typicode.com/users", function (response) {
  //   console.log(response);
  // });

  // Promise based
  // $.ajax("https://jsonplaceholder.typicode.com/posts/")
  //   .done(function (response) {
  //     console.log(response);
  //   })
  //   .fail(function (error) {
  //     console.log(error);
  //   });

  //update DOM

  // $.ajax({
  //   url: "https://jsonplaceholder.typicode.com/users",
  //   method: "GET",
  //   dataType: "json",
  //   success: function (response) {
  //     console.log(response);
  //     $("#result").text("Data received");
  //     // let users = response;
  //     // displayUsers(users);
  //   },
  //   error: function (err) {
  //     console.log(err);
  //   },
  // });

  let user = {
    name: "Alina",
    job: "Leader",
  };

  $("#btn").click(function () {
    $.ajax({
      url: "https://reqres.in/api/users",
      method: "POST",
      body: user,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  const settings = {
    async: true,
    crossDomain: true,
    url: "https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8",
    method: "GET",
    headers: {
      "x-rapidapi-key": "790d86839cmsh8e4edc9dd8ffc56p19fb3ejsn819cdbc59bdb",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings)
    .done(function (response) {
      console.log(response);
    })
    .fail(function (err) {
      console.log(err);
    });

  const data = {
    async: true,
    crossDomain: true,
    url: "https://twitter154.p.rapidapi.com/search/search/continuation?query=%23python&section=top&min_retweets=20&limit=5&continuation_token=DAACCgACF_Sz76EAJxAKAAMX9LPvoP_Y8AgABAAAAAILAAUAAABQRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUFVWDlJWmx4cHZBZkJmMG5RNUxHdUVQRi9TdTZPSGJzQ0VYOUp6Y3psdUJ3UmYwbFE3Q1dxQWsIAAYAAAAACAAHAAAAAAwACAoAARf0hmXGm8B8AAAA&min_likes=20&start_date=2022-01-01&language=en",
    method: "GET",
    headers: {
      "x-rapidapi-key": "790d86839cmsh8e4edc9dd8ffc56p19fb3ejsn819cdbc59bdb",
      "x-rapidapi-host": "twitter154.p.rapidapi.com",
    },
  };

  $.ajax(data).done(function (response) {
    console.log(response);
  });
});

displayUsers = (users) => {
  //DOM manipulation
  // users.length ? () : ()
};

//Task
//Try get the data movie API, E-commerce and console data (Rapid Api & fake Store API)
//Get the data from user and do post request -->
