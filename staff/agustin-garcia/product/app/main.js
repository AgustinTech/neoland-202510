//body

document.body.className = 'px-6'


// landing
const landingView = document.createElement('div')
landingView.className = 'bg-[grey]'

const landingTitle = document.createElement('h1')
landingTitle.textContent = 'MyPet'
landingTitle.className = 'text-white text-3xl font-bold'
landingView.appendChild(landingTitle)

const landingWelcome = document.createElement('p')
landingWelcome.textContent = 'Welcome!'
landingWelcome.className = 'text-white text-3xl'
landingView.appendChild(landingWelcome)


const landingAccess = document.createElement('p')
const landingLoginLink = document.createElement('a')
landingLoginLink.textContent = 'Login'
landingLoginLink.href = ''
landingLoginLink.className = 'border-yellow-500 border-2 rounded-xl bg-[dodgerblue] underline   '
landingAccess.appendChild(landingLoginLink)
const landingOrText = document.createTextNode(' or ')
landingAccess.appendChild(landingOrText)
const landingRegisterLink = document.createElement('a')
landingRegisterLink.textContent = 'Register'
landingRegisterLink.href = ''
landingRegisterLink.className = 'border-yellow-500 border-2 rounded-xl bg-[dodgerblue] underline'
landingAccess.appendChild(landingRegisterLink)
landingView.appendChild(landingAccess)

landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    landingView.style.display = 'none'
    loginFeedback.textContent = ''
    loginView.style.display = ''
})

landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    landingView.style.display = 'none'
    registerFeedback.textContent = ''
    registerForm.reset()
    registerView.style.display = ''
})

document.body.appendChild(landingView)

// register

const registerView = document.createElement('div')
registerView.style.display = 'none'

const registerTitle = document.createElement('h1')
registerTitle.textContent = 'MyPet'
registerTitle.className = 'text-white text-3xl bg-[grey] font-bold'
registerView.appendChild(registerTitle)
const registerSubtitle = document.createElement('h2')
registerSubtitle.textContent = 'Register'
registerSubtitle.className = 'font-bold'
registerView.appendChild(registerSubtitle)
const registerForm = document.createElement('form')
registerForm.className = 'border-2 border-[black]'
const registerNameLabel = document.createElement('label')
registerNameLabel.textContent = 'Name: '
registerNameLabel.htmlFor = 'name'
registerForm.appendChild(registerNameLabel)
const registerNameInput = document.createElement('input')
registerNameInput.id = 'name'
registerNameInput.type = 'text'
registerNameInput.placeholder = 'Pepito'
registerForm.appendChild(registerNameInput)
const registerEmailLabel = document.createElement('label')
registerEmailLabel.textContent = 'Email: '
registerForm.appendChild(registerEmailLabel)
const registerEmailInput = document.createElement('input')
registerEmailInput.id = 'email'
registerEmailInput.htmlFor = 'email'
registerEmailInput.type = 'email'
registerEmailInput.placeholder = 'pepito@grillo.com'
registerForm.appendChild(registerEmailInput)
const registerUsernameLabel = document.createElement('label')
registerUsernameLabel.htmlFor = 'username'
registerUsernameLabel.textContent = 'Username:'
registerForm.appendChild(registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
registerUsernameInput.id = 'username'
registerUsernameInput.type = 'text'
registerUsernameInput.placeholder = 'PepitoGrillo33'
registerForm.appendChild(registerUsernameInput)
const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'password'
registerPasswordLabel.textContent = 'Password:'
registerForm.appendChild(registerPasswordLabel)
const registerPasswordInput = document.createElement('input')
registerPasswordInput.id = 'password'
registerPasswordInput.type = 'password'
registerForm.appendChild(registerPasswordInput)
const registerShowPasswordButton = document.createElement('button')

registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordInput.type === 'password') {
        registerPasswordInput.type = 'text'
        registerShowPasswordButton.textContent = 'Hide'
    } else {
        registerPasswordInput.type = 'password'
        registerShowPasswordButton.textContent = 'Show'
    }
})
registerShowPasswordButton.textContent = 'Show'
registerShowPasswordButton.type = 'button'
registerShowPasswordButton.className = 'border-yellow-500 border-2 rounded-xl bg-[grey]'
registerForm.appendChild(registerShowPasswordButton)
const registerPasswordRepeatLabel = document.createElement('label')
registerPasswordRepeatLabel.htmlFor = 'passwordrepeat'
registerPasswordRepeatLabel.textContent = 'Repeat Password:'
registerForm.appendChild(registerPasswordRepeatLabel)
const registerPasswordRepeatInput = document.createElement('input')
registerPasswordRepeatInput.id = 'passwordrepeat'
registerPasswordRepeatInput.type = 'password'
registerForm.appendChild(registerPasswordRepeatInput)
const registerShowPasswordRepeatButton = document.createElement('button')
registerShowPasswordRepeatButton.textContent = 'Show'
registerShowPasswordRepeatButton.type = 'button'
registerShowPasswordRepeatButton.className = 'border-yellow-500 border-2 rounded-xl bg-[grey]'
registerForm.appendChild(registerShowPasswordRepeatButton)

registerShowPasswordRepeatButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordRepeatInput.type === 'password') {
        registerPasswordRepeatInput.type = 'text'
        registerShowPasswordRepeatButton.textContent = 'Hide'
    } else {
        registerPasswordRepeatInput.type = 'password'
        registerShowPasswordRepeatButton.textContent = 'Show'
    }
})


const registerSubmitButton = document.createElement('button')
registerSubmitButton.textContent = 'Register'
registerSubmitButton.type = 'submit'
registerSubmitButton.className = 'border-yellow-500 border-2 rounded-xl bg-[dodgerblue]'
registerForm.appendChild(registerSubmitButton)
registerView.appendChild(registerForm)

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = registerNameInput.value
    const email = registerEmailInput.value
    const username = registerUsernameInput.value
    const password = registerPasswordInput.value
    const passwordRepeat = registerPasswordRepeatInput.value

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)

        registerForm.reset()
        registerFeedback.textContent = ''

        registerView.style.display = 'none'
        loginView.style.display = ''
    } catch (error) {
        registerFeedback.textContent = error.message
    }
})

const registerLoginLink = document.createElement('a')
registerLoginLink.textContent = 'Login'
registerLoginLink.href = ''
registerLoginLink.className = 'border-yellow-500 border-2 rounded-xl bg-[dodgerblue]'
registerView.appendChild(registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginFeedback.textContent = ''
    loginView.style.display = ''
})



const registerFeedback = document.createElement('p')
registerView.appendChild(registerFeedback)

document.body.appendChild(registerView)


// login

const loginView = document.createElement('div')
loginView.style.display = 'none'

const loginTitle = document.createElement('h1')
loginTitle.textContent = 'MyPet'
loginTitle.className = 'text-white text-3xl bg-[grey]'
loginView.appendChild(loginTitle)

const loginSubtitle = document.createElement('h2')
loginSubtitle.textContent = 'Login '
loginView.appendChild(loginSubtitle)

const loginForm = document.createElement('form')
loginForm.className = 'border-2 border-black'
const loginUsernameLabel = document.createElement('label')
loginUsernameLabel.htmlFor = 'username'
loginUsernameLabel.textContent = 'Username:'
loginForm.appendChild(loginUsernameLabel)
const loginUsernameInput = document.createElement('input')
loginUsernameInput.type = 'text'
loginUsernameInput.id = 'username'
loginForm.appendChild(loginUsernameInput)
const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'password'
loginPasswordLabel.textContent = 'Password:'
loginForm.appendChild(loginPasswordLabel)
const loginPasswordInput = document.createElement('input')
loginPasswordInput.id = 'password'
loginPasswordInput.type = 'password'

const loginShowPasswordButton = document.createElement('button')

loginShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text'
        loginShowPasswordButton.textContent = 'Hide'
    } else {
        loginPasswordInput.type = 'password'
        loginShowPasswordButton.textContent = 'Show'
    }
})
loginShowPasswordButton.textContent = 'Show'
loginShowPasswordButton.type = 'button'
loginShowPasswordButton.className = 'border-yellow-500 border-2 rounded-xl bg-[grey]'
loginForm.appendChild(loginShowPasswordButton)

loginForm.appendChild(loginPasswordInput)
const loginSubmitButton = document.createElement('button')
loginSubmitButton.type = 'submit'
loginSubmitButton.textContent = 'Login'
loginSubmitButton.className = 'border-yellow-500 border-2 rounded-xl bg-[dodgerblue]'

loginForm.appendChild(loginSubmitButton)
loginView.appendChild(loginForm)

const loginRegisterLink = document.createElement('a')
loginRegisterLink.textContent = 'Register'
loginRegisterLink.href = ''
loginRegisterLink.className = 'border-yellow-500 border-2 rounded-xl bg-[dodgerblue]'
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

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const username = loginUsernameInput.value
    const password = loginPasswordInput.value

    try {
        logic.loginUser(username, password)

        loginForm.reset()

        loginFeedback.textContent = ''

        loginView.style.display = 'none'

        homeView.style.display = ''
    } catch (error) {
        loginFeedback.textContent = error.message
    }
})

document.body.appendChild(loginView)

// Home View

const homeView = document.createElement('div')
homeView.style.display = 'none'
homeView.className = 'bg-[grey]'

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeTitle.className = 'text-white text-3xl font-bold'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home'
homeSubtitle.className = 'text-white text-2xl font-bold'
homeView.appendChild(homeSubtitle)

const logoutButton = document.createElement('button')
logoutButton.textContent = 'Logout'
logoutButton.className = 'border-yellow-500 border-2 rounded-xl bg-[dodgerblue]'
homeView.appendChild(logoutButton)

logoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    loginView.style.display = ''

})


document.body.appendChild(homeView)