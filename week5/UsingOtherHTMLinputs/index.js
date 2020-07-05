console.log("hello world")
var text = document.text
text.addEventListener("submit", function(event){
event.preventDefault()

var restrictions = []

for (i = 0; i < text.diet.length; i++){
    if (text.diet[i].checked){
        restrictions.push(text.diet[i].value)
    }
}
alert(
    `
    First Name:${text.name1.value}
    Last Name:${text.name2.value}
    Age:${text.age.value}
    Gender:${text.gender.value}
    Location:${text.location.value}
    Diet:${restrictions}
    `

    
)
})