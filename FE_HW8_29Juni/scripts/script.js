//1
/*const numbersDiv = document.querySelector(".numbers"); 

for (let i = 100; i >= 50; i--){
    if(i % 10 === 0) {
    const pElem = document.createElement("p")
    pElem.innerText = i
}
numbersDiv.append(pElem);
}





// 2
const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
for (let i = 0; i < words.length; i++) {
    const pElem = document.createElement("p")
    pElem.innerText = words[i]
    const containerDiv = document.querySelector(".strings_container")
    containerDiv.append(pElem)
}*/



//3
const user = [{
    first_name: "Julia",
    last_name: "Dow",
    age: 40
},
{
    first_name: "Paula",
    last_name: "Low",
    age: 15
},
{
    first_name: "Mark",
    last_name: "Schwarz",
    age: 27
},
{
    first_name: "Maria",
    last_name: "Flow",
    age: 33
}]

const userDiv = document.querySelector(".users_container")
for (let i = 0; i < user.length; i++)  {
    if (i >= 18) {
        console.log(user) } {
        const {first_name, last_name, age} = user[i]
        const userCard = document.createElement("div")
     
        const pFirstName = document.createElement("p")
        pFirstName.innerText = `First name: ${first_name}`
        const pLastName = document.createElement("p")
        pLastName.innerText = `Last name: ${last_name}`
        const pAge = document.createElement("p")
        pAge.innerText = `Age: ${age}`
    document.body.append(userDiv)
    }
}

    userDiv.append(pFirstName, pLastName, pAge)