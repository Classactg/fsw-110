var colors = ["red", "blue", "green", "yellow", "orange",]
var id = document.FullName
console.log(id)
id.addEventListener("submit", function(event){event.preventDefault()
    console.log(event.currentTarget.children)
    var page = document.createElement("li")
    document.getElementById("list").append(page)
    for (i = 0; i < event.currentTarget.children.length - 1; i++){
        var text = event.currentTarget.children[i].value + " "
        page.append(text)
    }
var deletebtn = document.createElement("button")
    page.append(deletebtn)
    deletebtn.textContent = "Delete"
    deletebtn.addEventListener("click", function(event)
{page.remove()
    console.log("remove")})
    
    var random = Math.floor(Math.random() * colors.length)
    console.log(random)
    page.style.color = colors[random]
    






        
    
})
