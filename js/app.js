var results = [];
var maxNumber;

$(document).ready(function() {
  $('#getNumberForm').on('click', '#submitNumber', function(event) {
    event.preventDefault();
    maxNumber = +$('#getMaxNumber').val() + 1;
    console.log("User entered " + maxNumber);
    for (var i = 1; i < maxNumber; i++) {
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
    for (var j = 0; j < results.length; j++) {
      $('<li>' + results[j] + '</li>').appendTo('#list-of-numbers');
    }

    //$('<p>' + results + '</p>').appendTo('body');
  });

});