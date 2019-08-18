
var number1 = 0;
var number2 = 0;
var total = "";
var totals = [];

var countUp = function(number1, number2) {
  for (var index = number1; index <= number2; index += number1 ) {total += index + " "};

  totals = total.split(" ");

  return totals;
}

$(document).ready(function(){

  $("form#numbers").submit(function(event){
    event.preventDefault();

    $("ul#list").empty();
    number1 = parseInt($("input#number1").val());
    number2 = parseInt($("input#number2").val());

    countUp(number1, number2);

    console.log(totals);

    totals.forEach(function(total){
      if (total === "") {
        $("ul#list").append();
      } else {
        $("ul#list").append("<li>" + total + "</li>");
      }
    });

  });


});
