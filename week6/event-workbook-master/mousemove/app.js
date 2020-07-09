
var output = document.getElementsByClassName("red-box")[0]
 
output.addEventListener("mousemove", function(event){   
    output.textContent = event.x + " " + event.y
    console.log(event)
   
})