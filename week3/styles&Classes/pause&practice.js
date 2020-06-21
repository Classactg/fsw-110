var newH2 = document.createElement("h2")
newH2.textContent = "Do the glass slippers fit?"
document.body.append(newH2)
for (i = 0; i < 5; i++){
    var h2 = document.createElement("h2")
    h2.textContent = "Do the glass slippers fit?"
    h2.style.color = "cornflowerblue"
    document.body.append(h2)
    h2.style.fontSize = "20px"
    h2.style.fontWeight = "light"
    h2.style.fontFamily = "sansSerif"
    h2.classList.add("border");
}