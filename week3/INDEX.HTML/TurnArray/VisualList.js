var newH1 = document.createElement("h1")
newH1.textContent = "Hello World"
document.body.append(newH1)
for (i = 0; i < 10; i++){
    var newH1 = document.createElement("h1")
newH1.textContent = "Hello World"
document.body.append(newH1)
newH1.style.backgroundColor = "red"
}
const names=["steve","larry","joe","shirley","steph","nate","rick","emily"]
for (i = 0; i < names.length; i++){
var newP = document.createElement("p")
newP.textContent = names[i]
document.body.append(newP)
}
console.log(names[1])