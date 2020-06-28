

var push = document.getElementById("push")

push.onclick = function(){

    var add = document.getElementById("add").value

    var plus = document.getElementById("plus").value
    var answer = document.getElementById("answer")
    answer.textContent = Number(plus) + Number(add) 
     
}

var press = document.getElementById("press")

press.onclick = function(){
    
    var subtract = document.getElementById("subtract").value

    var minus = document.getElementById("minus").value
    var sub = document.getElementById("subresult")
    sub.textContent = Number(subtract) - Number(minus)

}

var down = document.getElementById("down")

down.onclick = function(){

    var multiply = document.getElementById("multiply").value

    var times = document.getElementById("times").value
    var equals = document.getElementById("multipleresult")
    equals.textContent = Number(multiply) * Number(times)

}
