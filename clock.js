$(document).ready( function() {
  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    // Div for Html
    var clockDiv = document.getElementById('clock');
    //strings for later
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }
  //runs to clock
  displayTime();
});