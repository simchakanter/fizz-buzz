var results = [];

$(document).ready(function() {
  console.log("Test");
  for (var i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        results.push("fizzbuzz");
      } else {
        results.push("fizz");
      }
    }
    else if (i % 5 === 0) {
      if (i % 3 === 0) {
        results.push("fizzbuzz");
      } else {
        results.push("buzz");
      }
    }
    else {
      results.push(i);
    }
  }
  $('<p>' + results + '</p>').appendTo('body');
});