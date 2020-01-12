// Set the date we're counting down to
// var countDownDate = new Date("Feb 30, 2020 00:00:00").getTime();
var countDownDate = new Date("2020-06-30T00:00:00Z").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  if(days.toString(10).length < 2 ){
    days = '0' + days.toString(10);
  }

  if(hours.toString(10).length < 2 ){
    hours = '0' + hours.toString(10);
  }

  if(minutes.toString(10).length < 2 ){
    minutes = '0' + minutes.toString(10);
  }
  
  if(seconds.toString(10).length < 2 ){
      seconds = '0' + seconds.toString(10);
  }
    
  // Output the result in 4 elements 
  document.getElementById("id_day").innerHTML = days;
  document.getElementById("id_hour").innerHTML = hours;
  document.getElementById("id_min").innerHTML = minutes;
  document.getElementById("id_sec").innerHTML = seconds;
    
}, 1000);