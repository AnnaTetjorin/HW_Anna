//1 
/*
const userFirstnameInput = document.querySelector(".user_firstname")
const userLastnameInput = document.querySelector(".user_lastname")
const userAgeInput = document.querySelector(".user_age")

const formElem = document.querySelector("form")
formElem.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(userFirstnameInput.value)
    console.log(userLastnameInput.value)
    console.log(userAgeInput.value)
}) 


//2
const userFirstnameInput = document.querySelector(".user_firstname")
const userLastnameInput = document.querySelector(".user_lastname")
const userAgeInput = document.querySelector(".user_age")

const formElem = document.querySelector("form")
const users = []
formElem.addEventListener("submit", function(event){
    event.preventDefault()
    const productObject = {name: userFirstnameInput.value,
    surname: userLastnameInput.value,
age: userAgeInput.value}
users.push(productObject)
    console.log(users)
    formElem.reset()
})
*/


//3    //4
const productsContainer = document.querySelector(".products_container")
function rerender() {
    productsContainer.innerHTML = ""
    if (products.length === 0) {
        const h1Elem = document.createElement("h1")
        h1Elem.innerText = "No products"
        productsContainer.append(h1Elem)
        return
    }
    for (let i = 0; i < products.length; i++) {
        const {name, price} = products[i]
        const productElem = createProductCard(name, price)
        const removeBtn = createRemoveBtn()
        productElem.append(removeBtn)
        removeBtn.addEventListener("dblclick", function () {
            console.log(i)
            products.splice(i, 1)})
            rerender()}
     productsContainer.append(productElem)}



