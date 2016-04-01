var number
var numbers = []
var pingPong = function(input){
  for(var i = 1; i <= input; i++){
    number = ("<p>" + i + "</p>");
    if(i%3 ===  0){
      if(i%5 ===  0){
        number = "<p class='ping-pong-output'>pingpong</p>"
      } else {
        number = "<p class='ping-output'>ping</p>"
      }} else if (i%5 ===  0){
          number = "<p class='pong-output'>pong</p>"
      }
      numbers.push(number);
    }
  return numbers.join('');
};






$(function(){
  $("#ping-pong").submit(function(event){
    event.preventDefault();
    $("#result").show();

    var numberInput = parseInt($("#number-input").val());
    var result = pingPong(numberInput);

    $(".output").append(result);

  });
  $("#result").click(function(){
    $(".output").empty();
  });
});
