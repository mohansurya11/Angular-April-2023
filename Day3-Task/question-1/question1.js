// 1. create a javascript code that runs every two seconds that changes image src
//  in html page such that it would create a slide show of images every 2 seconds....
images=["bbb.jpg","bird.jpg","cat.jpg","ccc.jpg","cutecat.jpg","ddd.jpg","eee.jpg","monkey.jpg","panda.jpg",]
let count=0

setInterval(function(){
    // count=(count+1)% images.length;

    document.getElementById("currentImage").src=images[count]
    if (count<images.length-1)
    
    count++
    else
    count=0

},1000)
