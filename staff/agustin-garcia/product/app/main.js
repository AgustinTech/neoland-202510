//body

document.body.className = 'px-6'


// landing
const landingView = document.createElement('div')
// landingView.style.display = ''
const landingTitle = document.createElement('h1')
landingTitle.textContent = 'MyPet'
landingTitle.className = 'text-3xl font-bold'
landingView.appendChild(landingTitle)

const landingWelcome = document.createElement('p')
landingWelcome.textContent = 'Welcome!'
landingWelcome.className = 'text-3xl'
landingView.appendChild(landingWelcome)


const landingAccess = document.createElement('p')
const landingLoginLink = document.createElement('a')
landingLoginLink.textContent = 'Login'
landingLoginLink.href = ''
landingLoginLink.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] px-2'
landingAccess.appendChild(landingLoginLink)
const landingOrText = document.createTextNode(' or ')
landingAccess.appendChild(landingOrText)
const landingRegisterLink = document.createElement('a')
landingRegisterLink.textContent = 'Register'
landingRegisterLink.href = ''
landingRegisterLink.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] px-2'
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
registerTitle.className = 'text-3xl font-bold'
registerView.appendChild(registerTitle)
const registerSubtitle = document.createElement('h2')
registerSubtitle.textContent = 'Register'
registerSubtitle.className = 'font-bold'
registerView.appendChild(registerSubtitle)
const registerForm = document.createElement('form')
registerForm.className = 'flex flex-col'
const registerNameLabel = document.createElement('label')
registerNameLabel.textContent = 'Name '
registerNameLabel.htmlFor = 'name'
registerForm.appendChild(registerNameLabel)
const registerNameInput = document.createElement('input')
registerNameInput.id = 'name'
registerNameInput.type = 'text'
registerNameInput.placeholder = 'Nombre'
registerNameInput.className = 'border px-1 rounded-xl'
registerForm.appendChild(registerNameInput)
const registerEmailLabel = document.createElement('label')
registerEmailLabel.textContent = 'Email '
registerForm.appendChild(registerEmailLabel)
const registerEmailInput = document.createElement('input')
registerEmailInput.id = 'email'
registerEmailInput.htmlFor = 'email'
registerEmailInput.type = 'email'
registerEmailInput.placeholder = 'Email'
registerEmailInput.className = 'border px-1 rounded-xl'
registerForm.appendChild(registerEmailInput)
const registerUsernameLabel = document.createElement('label')
registerUsernameLabel.htmlFor = 'username'
registerUsernameLabel.textContent = 'Username'
registerForm.appendChild(registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
registerUsernameInput.id = 'username'
registerUsernameInput.type = 'text'
registerUsernameInput.placeholder = 'Username'
registerUsernameInput.className = 'border px-1 rounded-xl'
registerForm.appendChild(registerUsernameInput)
const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'password'
registerPasswordLabel.textContent = 'Password'
registerForm.appendChild(registerPasswordLabel)
const registerPasswordInput = document.createElement('input')
registerPasswordInput.id = 'password'
registerPasswordInput.type = 'password'
registerPasswordInput.className = 'border px-1 rounded-xl'
registerForm.appendChild(registerPasswordInput)
const registerShowPasswordButton = document.createElement('button')

registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordInput.type === 'password') {
        registerPasswordInput.type = 'text'
        registerShowPasswordButton.textContent = 'Hide'
        registerPasswordInput.className = 'border px-1 bg-[gold]'
    } else {
        registerPasswordInput.type = 'password'
        registerShowPasswordButton.textContent = 'Show'
        registerPasswordInput.className = 'border px-1 '
    }
})

registerShowPasswordButton.textContent = 'Show'
registerShowPasswordButton.type = 'button'
registerShowPasswordButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-end'
registerForm.appendChild(registerShowPasswordButton)
const registerPasswordRepeatLabel = document.createElement('label')
registerPasswordRepeatLabel.htmlFor = 'passwordrepeat'
registerPasswordRepeatLabel.textContent = 'Repeat Password'
registerForm.appendChild(registerPasswordRepeatLabel)
const registerPasswordRepeatInput = document.createElement('input')
registerPasswordRepeatInput.id = 'passwordrepeat'
registerPasswordRepeatInput.type = 'password'
registerPasswordRepeatInput.className = 'border px-1 rounded-xl'
registerForm.appendChild(registerPasswordRepeatInput)
const registerShowPasswordRepeatButton = document.createElement('button')
registerShowPasswordRepeatButton.textContent = 'Show'
registerShowPasswordRepeatButton.type = 'button'
registerShowPasswordRepeatButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-end'
registerForm.appendChild(registerShowPasswordRepeatButton)

registerShowPasswordRepeatButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordRepeatInput.type === 'password') {
        registerPasswordRepeatInput.type = 'text'
        registerShowPasswordRepeatButton.textContent = 'Hide'
        registerPasswordRepeatInput.className = 'border px-1 bg-[gold]'
    } else {
        registerPasswordRepeatInput.type = 'password'
        registerShowPasswordRepeatButton.textContent = 'Show'
        registerPasswordRepeatInput.className = 'border px-1'
    }
})


const registerSubmitButton = document.createElement('button')
registerSubmitButton.textContent = 'Register'
registerSubmitButton.type = 'submit'
registerSubmitButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-center px-1'
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
registerLoginLink.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] px-2'
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
const loginSubmitButton = document.createElement('button')
loginSubmitButton.type = 'submit'
loginSubmitButton.textContent = 'Login'
loginSubmitButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-center px-1'
loginForm.appendChild(loginSubmitButton)
const loginShowPasswordButton = document.createElement('button')

loginShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text'
        loginShowPasswordButton.textContent = 'Hide'
        loginPasswordInput.className = 'border px-1 bg-[gold]'
    } else {
        loginPasswordInput.type = 'password'
        loginShowPasswordButton.textContent = 'Show'
        loginPasswordInput.className = 'border px-1'
    }
})
loginShowPasswordButton.textContent = 'Show'
loginShowPasswordButton.type = 'button'
loginShowPasswordButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-end'
loginForm.appendChild(loginShowPasswordButton)


loginView.appendChild(loginForm)

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

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeTitle.className = 'text-3xl font-bold'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home'
homeView.appendChild(homeSubtitle)


const homeAddPetButton = document.createElement('button')
homeAddPetButton.type = 'button'
homeAddPetButton.textContent = '+Pet'
homeAddPetButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] px-1'
homeView.appendChild(homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    addPetView.style.display = ''
})

const logoutButton = document.createElement('button')
logoutButton.textContent = 'Logout'
logoutButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] '
homeView.appendChild(logoutButton)

logoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()

    homeView.style.display = 'none'
    loginView.style.display = ''
})



document.body.appendChild(homeView)

// add pet

const addPetView = document.createElement('div')
addPetView.style.display = 'none'

const addPetTitle = document.createElement('h1')
addPetTitle.textContent = 'MyPet'
addPetTitle.className = 'text-3xl font-bold'
addPetView.appendChild(addPetTitle)

const addPetTopPanel = document.createElement('div')
addPetTopPanel.className = 'flex justify-between'
addPetView.appendChild(addPetTopPanel)

const addPetSubtitle = document.createElement('h2')
addPetSubtitle.textContent = 'Add Pet'
addPetSubtitle.className = 'text-2xl font-bold'
addPetView.appendChild(addPetSubtitle)

const addPetBackLink = document.createElement('a')
addPetBackLink.textContent = '< Back'
addPetBackLink.href = ''
addPetBackLink.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue]  px-2 underline'
addPetView.appendChild(addPetBackLink)

addPetBackLink.addEventListener('click', function (event) {
    event.preventDefault()

    addPetView.style.display = 'none'
    homeView.style.display = ''
})

const addPetForm = document.createElement('form')
addPetForm.className = 'flex flex-col'
const addPetNameLabel = document.createElement('label')
addPetNameLabel.htmlFor = 'name'
addPetNameLabel.textContent = 'Name'
addPetForm.appendChild(addPetNameLabel)
const addPetNameInput = document.createElement('input')
addPetNameInput.type = 'text'
addPetNameInput.id = 'Name'
addPetNameInput.className = 'border px-1 rounded-xl'
addPetForm.appendChild(addPetNameInput)
const addBirthdateLabel = document.createElement('label')
addBirthdateLabel.htmlFor = 'date'
addBirthdateLabel.textContent = 'Date of Birth'
addPetForm.appendChild(addBirthdateLabel)
const addBirthdateInput = document.createElement('input')
addBirthdateInput.id = 'date'
addBirthdateInput.type = 'date'
addBirthdateInput.className = 'border px-1 rounded-xl'
addPetForm.appendChild(addBirthdateInput)
const addPetWeightLabel = document.createElement('label')
addPetWeightLabel.htmlFor = 'weight'
addPetWeightLabel.textContent = 'Weight (kg)'
addPetForm.appendChild(addPetWeightLabel)
const addPetWeightInput = document.createElement('input')
addPetWeightInput.id = 'weight'
addPetWeightInput.type = 'number'
addPetWeightInput.className = 'border px-1 rounded-xl'
addPetForm.appendChild(addPetWeightInput)
const addpetImageLabel = document.createElement('label')
addpetImageLabel.id = 'image'
addpetImageLabel.textContent = 'Image'
addPetForm.appendChild(addpetImageLabel)
const addPetImageInput = document.createElement('input')
addPetImageInput.id = 'image'
addPetImageInput.type = 'url'
addPetImageInput.className = 'border px-1 rounded-xl'
addPetForm.appendChild(addPetImageInput)
const addPetSubmitButton = document.createElement('button')
addPetSubmitButton.type = 'submit'
addPetSubmitButton.textContent = 'Add Pet'
addPetSubmitButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-center px-1 self-center mt-4'
addPetForm.appendChild(addPetSubmitButton)
addPetView.appendChild(addPetForm)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = addPetNameInput.value
    const birthdate = addBirthdateInput.value
    const weight = addPetWeightInput.value
    const image = addPetImageInput.value

    console.log(name, birthdate, weight, image)
})

document.body.appendChild(addPetView)