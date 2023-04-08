var seconds = 0;
var minutes = 0;
var hours   = 0;

var a=setInterval(function() {
    timer.innerHTML = hours + ":"+ minutes + ":" + seconds;
    seconds++;
    if (seconds === 59) {
        seconds = 0;       
        minutes++;
    }
    if (minutes === 59) {
        minutes = 0;       
        hours++;
    }
    if (hours === 24) {     
        hours = 0;

    }
    
    
},1000);

