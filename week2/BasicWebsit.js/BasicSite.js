var newBaby = document.body
var h1 = document.createElement("h1")
h1.textContent = "hello world"
newBaby.append(h1)
var nav = document.createElement("nav")
nav.innerHTML = "<a>About </a><a> Content</a>"
newBaby.append(nav)
var newP = document.createElement("p")
newP.textContent = "Work hard at your craft"
newBaby.append(newP) 
var newT = document.createElement("ol")
newT.textContent = "Have a vision"
newBaby.append(newT)
var listItem = document.createElement("li")
listItem.textContent = "Learn from mistakes"
newT.append(listItem)
var listItem2 = document.createElement("li")
listItem2.textContent = "Reap the benefits"
newT.append(listItem2)

var newG = document.createElement("footer")
newG.textContent = "DO WORK!!"
newBaby.append(newG)
