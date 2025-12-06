const landingView = document.createElement('div')
landingView.style.display = ''
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