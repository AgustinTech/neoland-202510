const loginView = createView()
hideView(loginView)

const loginTitle = createTitle()
setTextContent(loginTitle, 'MyPet')
setClass(loginTitle, 'text-3xl font-bold')
addChild(loginView, loginTitle)

const loginSubtitle = createSubtitle()
setTextContent(loginSubtitle, 'Login ')
setClass(loginSubtitle, 'font-bold')
addChild(loginView, loginSubtitle)

const loginForm = createForm()
setClass(loginForm, 'flex flex-col')

const loginUsernameLabel = createLabel()
setFor(loginUsernameLabel, 'username')
setTextContent(loginUsernameLabel, 'Username')
addChild(loginForm, loginUsernameLabel)

const loginUsernameInput = createInput()
setType(loginUsernameInput, 'text')
setId(loginUsernameInput, 'username')
setClass(loginUsernameInput, 'border px-1 rounded-xl')
addChild(loginForm, loginUsernameInput)

const loginPasswordLabel = createLabel()
setFor(loginPasswordLabel, 'password')
setTextContent(loginPasswordLabel, 'Password')
addChild(loginForm, loginPasswordLabel)

const loginPasswordInput = createInput()
setId(loginPasswordInput, 'password')
setType(loginPasswordInput, 'password')
setClass(loginPasswordInput, 'border px-1 rounded-xl')
addChild(loginForm, loginPasswordInput)

const loginShowPasswordButton = createButton()
setTextContent(loginShowPasswordButton, 'Show')
setType(loginShowPasswordButton, 'button')
setClass(loginShowPasswordButton, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-end')
addChild(loginForm, loginShowPasswordButton)

const PwdCapsFlag = createSpan()
setTextContent(PwdCapsFlag, '⬆')
hideView(PwdCapsFlag)
setClass(PwdCapsFlag, 'self-end')
addChild(loginForm, PwdCapsFlag)

loginShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(loginPasswordInput) === 'password') {
        setType(loginPasswordInput = 'text')
        setTextContent(loginShowPasswordButton, 'Hide')
        setClass(loginPasswordInput, 'border px-1 bg-[gold] rounded-xl')
    } else {
        setType(loginPasswordInput = 'password')
        setTextContent(loginShowPasswordButton, 'Show')
        setClass(loginPasswordInput, 'border px-1 rounded-xl')
    }
})

loginPasswordInput.addEventListener('keydown', function (event) {
    if (event.getModifierState('CapsLock')) {
        showView(PwdCapsFlag)
    } else {
        hideView(PwdCapsFlag)
    }
})

const loginSubmitButton = createButton()
setType(loginSubmitButton, 'submit')
setTextContent(loginSubmitButton, 'Login')
setClass(loginSubmitButton, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-center px-2 mt-4')
addChild(loginForm, loginSubmitButton)
addChild(loginView, loginForm)


loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const username = getValue(loginUsernameInput)
    const password = getValue(loginPasswordInput)

    try {
        logic.loginUser(username, password)

        reset(loginForm)
        setTextContent(loginFeedback, '')

        renderHomePetList()

        hideView(loginView)
        showView(homeView)
    } catch (error) {
        setTextContent(loginFeedback, error.message)
    }
})

const loginRegisterLink = createLink()
setTextContent(loginRegisterLink, 'Register')
setClass(loginRegisterLink, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue]  px-2')
addChild(loginView, loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(loginView)
    showView(registerView)
})


const loginFeedback = createParagraph()
addChild(loginView, loginFeedback)

addChild(document.body, loginView)
