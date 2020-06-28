var newP = document.createElement("div")
newP.style.border = "solid black 5px"
newP.style.height = "300px"
newP.style.width = "300px"
newP.id = "changeColor"
document.body.append(newP)

var color = document.getElementById("changeColor")

var blue = function(){
    color.style.backgroundColor = "blue"
}

var red = function(){
    color.style.backgroundColor = "red"
}

var yellow = function(){
    color.style.backgroundColor = "yellow"
}

var green = function(){
    color.style.backgroundColor = "green"
}

var orange = function (){
    color.style.backgroundColor = "orange"
}

color.addEventListener("mouseover", blue)
color.addEventListener("mousedown",red)
color.addEventListener("mouseup", yellow)
color.addEventListener("dblclick", green)
color.addEventListener("mouseleave", orange)

document.addEventListener("keydown", function(event){
    console.log(event);
    //write an if statement to check the key OR keycode of the event and depending on what key it is then cahnge the color accordingly. 
    // r == red

})

document.addEventListener("keydown", function(event) {
if (event.which === 82){
    color.style.backgroundColor = "red"
}

  })

  document.addEventListener("keydown", function(event) {
    if (event.which === 66){
            color.style.backgroundColor = "blue"
}

})

document.addEventListener("keydown", function(event) {
    if (event.which === 89){
            color.style.backgroundColor = "yellow"
}

})

document.addEventListener("keydown", function(event) {
    if (event.which === 79){
            color.style.backgroundColor = "orange"
}

})

document.addEventListener("keydown", function(event) {
    if (event.which === 71){
            color.style.backgroundColor = "green"
}

})