
var number1 = 0;
var number2 = 0;
var total = "";
var totals = [];

var countUp = function(number1, number2) {
  for (var index = number1; index <= number2; index += number1 ) {total += index + " "};

  totals = total.split(" ");

  totals.reverse();
  totals.shift();
  totals.reverse();

  if (totals.length === 0) {
    return totals = "error";
  } else {
    return totals;
  }
}

var errorReset = function(){
  if (totals === "error") {
    $("input#number1").val("");
    $("input#number2").val("");
    return $("ul#list").append("<li>Please pick a count to number that is larger than the count by number!</li>");
  }
}


$(document).ready(function(){

  $("form#numbers").submit(function(event){
    event.preventDefault();

    $("ul#list").empty();

    number1 = parseInt($("input#number1").val());
    number2 = parseInt($("input#number2").val());

    countUp(number1, number2);

    console.log(totals);

    errorReset();

    totals.forEach(function(total){
      $("ul#list").append("<li>" + total + "</li>");
    });

  });


});
