// 2. Downlaod an image which is a gif that show some fireworks..
//   When the page is loaded it should show a countdown for 30seconds 
//   [Note : this 30sec countdown should be handled using set Interval and 
//   After 30second you can clear the function using clearInterval





var countdownT = 5;
     
      var countdownInterval = setInterval(function () {
        countdownnum.innerHTML = countdownT;
        countdownT--;

        if (countdownT <0) {
          clearInterval(countdownInterval);
          countdownnum.style.display = "none";
          let fireWork = document.getElementById("fireWorks");
          fireWork.style.display = "block";
        }
      }, 1000);