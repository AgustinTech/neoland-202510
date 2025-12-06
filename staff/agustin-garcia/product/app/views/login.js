const loginView = document.createElement('div')
loginView.style.display = 'none'

const loginTitle = document.createElement('h1')
loginTitle.textContent = 'MyPet'
loginTitle.className = 'text-3xl font-bold'
loginView.appendChild(loginTitle)

const loginSubtitle = document.createElement('h2')
loginSubtitle.textContent = 'Login '
loginSubtitle.className = 'font-bold'
loginView.appendChild(loginSubtitle)

const loginForm = document.createElement('form')
loginForm.className = 'flex flex-col'
const loginUsernameLabel = document.createElement('label')
loginUsernameLabel.htmlFor = 'username'
loginUsernameLabel.textContent = 'Username'
loginForm.appendChild(loginUsernameLabel)
const loginUsernameInput = document.createElement('input')
loginUsernameInput.type = 'text'
loginUsernameInput.id = 'username'
loginUsernameInput.className = 'border px-1 rounded-xl'
loginForm.appendChild(loginUsernameInput)
const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'password'
loginPasswordLabel.textContent = 'Password'
loginForm.appendChild(loginPasswordLabel)
const loginPasswordInput = document.createElement('input')
loginPasswordInput.id = 'password'
loginPasswordInput.type = 'password'
loginPasswordInput.className = 'border px-1 rounded-xl'
loginForm.appendChild(loginPasswordInput)
const loginShowPasswordButton = document.createElement('button')
loginShowPasswordButton.textContent = 'Show'
loginShowPasswordButton.type = 'button'
loginShowPasswordButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-end'
loginForm.appendChild(loginShowPasswordButton)

loginShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text'
        loginShowPasswordButton.textContent = 'Hide'
        loginPasswordInput.className = 'border px-1 bg-[gold] rounded-xl'
    } else {
        loginPasswordInput.type = 'password'
        loginShowPasswordButton.textContent = 'Show'
        loginPasswordInput.className = 'border px-1 rounded-xl'
    }
})

const loginSubmitButton = document.createElement('button')
loginSubmitButton.type = 'submit'
loginSubmitButton.textContent = 'Login'
loginSubmitButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-center px-2 mt-4'
loginForm.appendChild(loginSubmitButton)
loginView.appendChild(loginForm)


loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const username = loginUsernameInput.value
    const password = loginPasswordInput.value

    try {
        logic.loginUser(username, password)

        loginForm.reset()
        loginFeedback.textContent = ''

        const pets = logic.getPets()

        for (let i = 0; i < pets.length; i++) {
            const pet = pets[i]

            const item = document.createElement('li')
            item.className = 'flex '

            const image = document.createElement('img')
            image.src = pet.image
            image.className = 'rounded w-15'
            item.appendChild(image)

            const name = document.createElement('p')
            name.textContent = pet.name
            item.appendChild(name)

            homePetList.appendChild(item)
        }

        loginView.style.display = 'none'
        homeView.style.display = ''
    } catch (error) {
        loginFeedback.textContent = error.message
    }
})

const loginRegisterLink = document.createElement('a')
loginRegisterLink.textContent = 'Register'
loginRegisterLink.href = ''
loginRegisterLink.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue]  px-2'
loginView.appendChild(loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    loginFeedback.textContent = ''
    registerForm.reset()
    registerView.style.display = ''
})


const loginFeedback = document.createElement('p')
loginView.appendChild(loginFeedback)

document.body.appendChild(loginView)
