//1
/*const btn = document.createElement("button")
btn.innerText = "Change the color"
const divElem = document.createElement("div")
divElem.style.width = "200px"
divElem.style.height = "200px"
divElem.style.backgroundColor = "red"
document.body.append(btn, divElem)

btn.addEventListener("click", function() {
    divElem.style.backgroundColor = "green"
    divElem.style.width = "100px"
    divElem.style.height = "100px"
})


//2
const btn = document.createElement("button")
btn.innerText = "Change the color"
const divElem = document.createElement("div")
divElem.style.width = "200px"
divElem.style.height = "200px"
divElem.style.backgroundColor = "pink"
document.body.append(btn, divElem)

btn.addEventListener("click", function() {
    console.log("My new color is blue.")
    divElem.style.backgroundColor = "blue"
})




//3
const btn = document.createElement("button")
btn.innerText = "Change the size"
const divElem = document.createElement("div")
divElem.style.width = "150px"
divElem.style.height = "150px"
divElem.style.backgroundColor = "gold"
document.body.append(btn, divElem)

btn.addEventListener("click", function() {
    divElem.style.width = "170px"
    divElem.style.height = "170px"
})



//4
const btn = document.createElement("button")
btn.innerText = "Create a paragraph"
const rootDiv = document.querySelector(".root")
rootDiv.style.width = "400px"
rootDiv.style.height = "400px"
rootDiv.style.backgroundColor = "aqua"
document.body.append(btn)

btn.addEventListener("click", function() {
    const pElem = document.createElement("p")
    pElem.innerText = "Hello my friend!:)"
    pElem.style.color = "blue"
    rootDiv.append(pElem)
})

*/


//5
const btn = document.createElement("button")
btn.innerText = "Create two paragraphs"
const rootDiv = document.querySelector(".root")
rootDiv.style.width = "300px"
rootDiv.style.height = "300px"
rootDiv.style.backgroundColor = "yellow"
document.body.append(btn)

btn.addEventListener("click", function() {
    const pOneElem = document.createElement("p")
    pOneElem.innerText = "Hello my friend!:)"
    pOneElem.style.color = "blue"
    pOneElem.style.fontWeight = "bold"
    const pTwoElem = document.createElement("p")
    pTwoElem.innerText = "I am glad to see you!:)"
    pTwoElem.style.color = "green"
    pTwoElem.style.fontWeight = "bold"
    rootDiv.append(pOneElem, pTwoElem)
})