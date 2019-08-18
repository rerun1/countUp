
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

  return totals;

}

var error = function(totals) {
  if (totals.length === 0) {
    return alert("Count to number is smaller than count by number, please enter a count to number that is larger than the number you would like to count by");
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

    error(totals);

    totals.forEach(function(total){
      $("ul#list").append("<li>" + total + "</li>");
    });

  });


});
