
var number1 = 0;
var number2 = 0;
var counts = [];

var countUp = function(number1, number2) {
  if (number2 < number1 ) {
    return counts.push("Please choose a number to stop at that is greater than the number you are counting by");
  } else {
  for (var index = number1; index <= number2; index += number1 ) {counts.push(index)};

  return counts;
  }
};

var resetForm = function(){
  $("input#number1").val("");
  $("input#number2").val("");
};


$(document).ready(function(){

  $("form#numbers").submit(function(event){

    $("h2#countStart").empty();
    $("ul#result").empty();
    $("h2#countEnd").empty();

    counts = [];

    number1 = parseInt($("input#number1").val());
    number2 = parseInt($("input#number2").val());

    countUp(number1,number2);

    console.log(counts);


    $("h2#countStart").text("Your sequence starts at and counts up by " + number1);
    for (var countIndex = 1; countIndex < (counts.length - 1); countIndex += 1) {

    $("ul#result").append("<li>" + counts[countIndex] + "</li>");

    }
    $("h2#countEnd").text("Your sequence stops at " + number2);

    resetForm();


    event.preventDefault();
  });


});
