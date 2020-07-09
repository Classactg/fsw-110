// make the box disapear when the user clicks it
var redbox =  document.getElementsByClassName("red-box")[0]
console.log(redbox)
redbox.addEventListener("click", function(){
    redbox.remove()
}
)