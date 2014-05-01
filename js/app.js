var results = [];
var maxNumber;

$(document).ready(function() {
  $('#getNumberForm').on('click', '#submitNumber', function(event) {
    event.preventDefault();
    maxNumber = +$('#getMaxNumber').val();
    $('#getMaxNumber').val("");
    console.log("User entered " + (maxNumber));
    if (isNaN(maxNumber)) {
      $('#error-message').text("That ain't no number.");
      $('#error-message').show();
    }
    else if (maxNumber % 1 !== 0) {
      $('#error-message').text("How am I supposed to count to a decimal?");
      $('#error-message').show();
    }
    else {
      $('#error-message').hide();
      fizzBuzz(maxNumber);
      for (var j = 0; j < results.length; j++) {
        $('<li>' + results[j] + '</li>').appendTo('#list-of-numbers');
      }
    }
  });
});

// a = x ? foo : bar is a shortcut in JS to do
// if (x) { a= foo} else {a = bar}



function fizzBuzz (maxLimit) {
  for (var i = 1; i < (maxNumber + 1); i++) {
    // Think - "Does i divided by three not have a remainder?"
    // Remember - when grouping or's in a not, all of them have to be false for the statement to be true
    var toAppend = !(i % 3 || i % 5) ? "fizzbuzz" : !(i % 3) ? "fizz" : !(i % 5) ? "buzz" : i;
    // var toAppend = i;
    // if (i % 3 === 0 && i % 5 === 0) {
    //   toAppend = "fizzbuzz";
    // }
    // else if (i % 3 === 0) {
    //   toAppend = "fizz";
    // }
    // else if (i % 5 === 0) {
    //   toAppend = "buzz";
    // }
    results.push(toAppend);
  }
}