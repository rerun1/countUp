
var number1 = 0;
var number2 = 0;
var total = "";
var totals = [];

var countUp = function(number1, number2) {
  if (number2 < number1 ) {
    return $("ul.list").append("<li class='red'>Please choose a number to stop at that is greater than the number you are counting by</li>");
  } else {
  for (var index = number1; index <= number2; index += number1 ) {total += index + " "};

  totals = total.split(" ");

  totals.pop();

  return totals;
  }
}

var resetForm = function(){
  $("input#number1").val("");
  $("input#number2").val("");
}

var createList = function(totals){
  for (var index = 0; index < totals.length; index += 1) {
    $("ul.list").append("<li>"+totals[index]+"</li>");
  }
}


$(document).ready(function(){


  $("form#numbers").submit(function(event){
    event.preventDefault();

    $("ul.list").empty();
    $("li").empty();

    number1 = parseInt($("input#number1").val());
    number2 = parseInt($("input#number2").val());



    countUp(number1, number2);

    console.log(totals);

    createList(totals);

    resetForm();

  });


});
