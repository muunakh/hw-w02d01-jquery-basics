// turn on stop function 
function turnOfflight(){
  $('#stopLight').css('background-color','black');
  $('#slowLight').css('background-color','black');
  $('#goLight').css('background-color','black');
}
function turnOnStopLight() {
  // change background color of stop light to red
  // changes background color of green and yellow to black
  turnOfflight();
  $('#stopLight').css('background-color','red');
 
}
// turn on slow function
function turnOnSlowLight() { 
// change background color of slow light to yellow
// changes background color of red and green to black
//$('#stopLight').css('background-color','black');
turnOfflight();
$('#slowLight').css('background-color','yellow');
}
// turn on go function
function turnOnGoLight() {
  // change background color of go light to green
  // changes background color of red and yellow to black
 
  turnOfflight();
  $('#goLight').css('background-color','green');
}
// set stop light click event
$('#stopButton').on('click',turnOnStopLight);
// set slow light click event
$('#slowButton').on('click',turnOnSlowLight);
// set go light click event
$('#goButton').on('click',turnOnGoLight);
