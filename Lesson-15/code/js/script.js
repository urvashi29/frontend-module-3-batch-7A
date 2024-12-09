// Structure
// $(document).ready(function () {
//     //write code
// });

//Jquery Selector  // $("css selector")
// $(document).ready(function () {
//   // console.log($("#demo"));

//   //   Basic selector
//   // element selector
//   $("button").click(function () {
//     //  id selector, class selector,group selector (,)
//     $(".test, #demo").hide();
//   });

//   //   Precise selector (:first, :odd, :even)
//   //   :first : li present as first child
//   //   $("li:first").hide();
//   //   $("li:last").hide();

//   $("li:odd").hide();
//   $("ul > li:even").hide();

//   //   :not(state)
//   $("input:not(:hidden)").hide();

// });

//Jquery HTML Manipulation (get & set)
// text(): similar to textContent in js
// html(): similar to innerHTML in js
// val(): similar to "value" prop of input (user input capture)
// attr(): similiar to attribute method of js

// $(document).ready(function () {
//   // get
//   console.log($(".dummy").text());
//   console.log($(".dummy").html());
//   console.log($("#name").val());
//   console.log($("a").attr("href"));

//   //  set
//   $("#btn").click(function () {
//     $("#demo").text("ReactJs", fun);
//     $(".dummy").html("<h2>Welcome!</h2>");

//     // to capture user input
//     alert($("#name").val());

//     //manipulating attribute value
//     $("a").attr("href", "https://www.gmail.com");
//   });
// });

//how to add & delete new element
// append(): add the element in the end
// perpend(): add the element the start
// before(): add element before a specific element
// after(): add element after a specific element

// $(document).ready(function () {
//   $("#del").click(function () {
//     let li = $("<li></li>").text("ReactJs"); //<li>ReactJs</li>
//     $("ol").prepend(li);

//     let liEle = $("<li></li>").text("NextJs"); //<li>ReactJs</li>
//     $("ol").append(liEle);

//     let img = $("<img>").attr(
//       "src",
//       "https://cdn140.picsart.com/26255880684190648073.png?type=webp&r=1280&to=min"
//     );

//     console.log(img);
//     $("ol").after(img);
//   });
// });

//Manipulating CSS
// addClass()
// removeClass()
// toggleClass()
// css()
// $(document).ready(function () {
//   $("#styles").click(function () {
//     $(".dummy").removeClass("dummy");

//     // $("#demo").addClass("sample");

//     $("#demo").toggleClass("sample");

//     $("ol").css({
//       "background-color": "yellow",
//       "font-size": "20px",
//     });
//   });
// });

//event Handling
// mouseenter(), keyup(), keydown(), change()
// $(document).ready(function () {
//   //   $("#name").change(function () {
//   //   });

//   //attach 2 event togather using on()
//   $("#demo").on({
//     click: function () {
//       //this is referring to parent object (p#demo) of function
//       $(this).css({ "background-color": "pink" });
//     },
//     mouseleave: function (e) {
//       console.log(e);
//       alert("Mouse Left!");
//     },
//   });
// });

// Effects
$(document).ready(function () {
  //     $("#hide").click(function () {
  //       $("#box").hide(function () {
  //         alert("Box is hidden!");
  //       });
  //     });

  //   $("#show").click(function () {
  //     $("#box").show(function () {
  //       alert("Box is showed!");
  //     });
  //   });

  //   $("#toggle").click(function () {
  //     $("#box").toggle();
  //   });

  //   hiding & showing with fading effect
  // fadeIn(speed): "slow", "fast", "miliseconds"
  $("#fadein").click(function () {
    $("#box").fadeIn("2000"); //""
  });

  $("#fadeout").click(function () {
    $("#box").fadeOut();
  });

  $("#fadetoggle").click(function () {
    $("#box").fadeToggle();
  });

  //   animate
  $("#animate").click(function () {
    $("#ani").animate({
      height: "200px",
      width: "150px",
      opacity: "0.3",
    });
  });
});
