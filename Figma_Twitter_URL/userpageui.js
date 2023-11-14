const root = document.querySelector('#root')
const userContainer = document.createElement('div')
root.append(userContainer)

const urlParams = new URLSearchParams(window.location.search)
const userId = urlParams.get('userId')

const fetchUserDataAndPosts = async (userId, callback) => {
    try{
     const [userResponse, postResponse] = await Promise.all([
         fetch(`https://dummyjson.com/users/${userId}`),
         fetch(`https://dummyjson.com/posts/user/${userId}`)
     ])
     if (!userResponse.ok){
         throw Error("User doesn't exist")
     };

     const userData = await userResponse.json()
     const postData = await postResponse.json()
    
     console.log('userData', userData.firstName, userData.email)
     console.log('postData', postData.posts)
    
     callback(userData.firstName, userData.email, postData.posts)
  
    } catch (error) {
     console.log(error);
     root.innerHTML = `<h1>${error.message}</h1>`
    }
    
  }
  fetchUserDataAndPosts(userId, (firstName, email, posts) => console.log(firstName, email, posts))

  let currentUserId = 2
  

const showUserAndPosts = (userName, userEmail, posts) => {
    userContainer.innerHTML = ''
    const user = document.createElement('div')
    const name = document.createElement('h1')
    name.innerText = userName
    const email = document.createElement('h2')
    email.innerText = userEmail
    user.append(name, email)
    userContainer.append(user)

    posts.forEach((product) => {
        const post = document.createElement('div')
        const title = document.createElement('h4')
        title.innerText = product.title
        const body = document.createElement('p')
        body.innerText = product.body
    })
}

//showUserAndPosts(userName, userEmail, posts)