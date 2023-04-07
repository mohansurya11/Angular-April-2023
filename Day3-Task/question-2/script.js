// 2. Downlaod an image which is a gif that show some fireworks..
//   When the page is loaded it should show a countdown for 30seconds 
//   [Note : this 30sec countdown should be handled using set Interval and 
//   After 30second you can clear the function using clearInterval

let display=document.getElementById("hello")
let img=document.getElementById("image")
let c=5
function countdown() 
{
    
    display.innerHTML=c
    c--

    if (c<0)
    {
        clearInterval(a)
       
        img.src="firework.gif";
        
    }   
}

let a=setInterval(countdown,1000)