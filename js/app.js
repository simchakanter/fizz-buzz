var results = [];
var maxNumber;

$(document).ready(function() {
  $('#getNumberForm').on('click', '#submitNumber', function(event) {
    event.preventDefault();
    maxNumber = +$('#getMaxNumber').val() + 1;
    $('#getMaxNumber').val("");
    console.log("User entered " + (maxNumber - 1) + ", adding one to set upper limit...");
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
    }
  });

});