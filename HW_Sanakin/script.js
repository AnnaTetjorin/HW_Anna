const sectionDeals = document.querySelector('#deals')
const h3 = document.createElement('h3')
h3.innerText = 'Best Deals For You!'
sectionDeals.append(h3) 
const divDeals = document.querySelector('.divDeals')

const showEachProduct = (arrayOfProducts) => {
    arrayOfProducts.forEach((product) => {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        const image = document.createElement('img')
        image.src = product.images[0]
        const title = document.createElement('h2')
        title.innerText = product.title
        const price = document.createElement('p')
        price.innerText = product.price
        const description = document.createElement('p')
        description.innerText = product.description
        const button = document.createElement('button')
        button.innerText = 'Add to cart'
        button.classList.add('addButton')
        
        productCard.append(image, title, price, description, button)
        divDeals.append(productCard)
        sectionDeals.append(divDeals)
    })
}

const fetchProducts = (callback) => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => callback(data.products))
}

fetchProducts((products) => showEachProduct(products))
