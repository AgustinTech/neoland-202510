const registerView = createView()
hideView(registerView)

const registerTitle = createTitle()
setTextContent(registerTitle, 'MyPet')
setClass(registerTitle, 'text-3xl font-bold')
addChild(registerView, registerTitle)

const registerSubtitle = createSubtitle()
setTextContent(registerSubtitle, 'Register')
setClass(registerSubtitle, 'font-bold')
addChild(registerView, registerSubtitle)

const registerForm = createForm()
setClass(registerForm, 'flex flex-col')

const registerNameLabel = createLabel()
setTextContent(registerNameLabel, 'Name ')
setFor(registerNameLabel, 'name')
addChild(registerForm, registerNameLabel)

const registerNameInput = createInput()
setId(registerNameInput, 'name')
setType(registerNameInput, 'text')
setPlaceHolder(registerNameInput, 'Nombre')
setClass(registerNameInput, 'border px-1 rounded-xl')
addChild(registerForm, registerNameInput)

const registerEmailLabel = createLabel()
setTextContent(registerEmailLabel, 'Email')
addChild(registerForm, registerEmailLabel)

const registerEmailInput = createInput()
setId(registerEmailInput, 'email')
setFor(registerEmailInput, 'email')
setType(registerEmailInput, 'email')
setPlaceHolder(registerEmailInput, 'Email')
setClass(registerEmailInput, 'border px-1 rounded-xl')
addChild(registerForm, registerEmailInput)

const registerUsernameLabel = createLabel()
setFor(registerUsernameLabel, 'username')
setTextContent(registerUsernameLabel, 'Username')
addChild(registerForm, registerUsernameLabel)

const registerUsernameInput = createInput()
setId(registerUsernameInput, 'username')
setType(registerUsernameInput, 'text')
setPlaceHolder(registerUsernameInput, 'Username')
setClass(registerUsernameInput, 'border px-1 rounded-xl')
addChild(registerForm, registerUsernameInput)

const registerPasswordLabel = createLabel()
setFor(registerPasswordLabel, 'password')
setTextContent(registerPasswordLabel, 'Password')
addChild(registerForm, registerPasswordLabel)

const registerPasswordInput = createInput()
setId(registerPasswordInput, 'password')
setType(registerPasswordInput, 'password')
setClass(registerPasswordInput, 'border px-1 rounded-xl')
addChild(registerForm, registerPasswordInput)

const registerShowPasswordButton = createButton()
setTextContent(registerShowPasswordButton, 'Show')
setType(registerShowPasswordButton, 'button')
setClass(registerShowPasswordButton, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-end')
addChild(registerForm, registerShowPasswordButton)


registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(registerPasswordInput) === 'password') {
        setType(registerPasswordInput = 'text')
        setTextContent(registerShowPasswordButton, 'Hide')
        setClass(registerPasswordInput, 'border px-1 bg-[gold] rounded-xl')
    } else {
        setType(registerPasswordInput = 'password')
        setTextContent(registerShowPasswordButton, 'Show')
        setClass(registerPasswordInput, 'border px-1 rounded-xl')
    }
})


const registerPwdCapsFlag = createSpan()
setTextContent(registerPwdCapsFlag, '⬆')
hideView(registerPwdCapsFlag)
setClass(registerPwdCapsFlag, 'self-end')
addChild(registerForm, registerPwdCapsFlag)

registerPasswordInput.addEventListener('keydown', function (event) {
    if (event.getModifierState('CapsLock')) {
        showView(registerPwdCapsFlag)
    } else {
        hideView(registerPwdCapsFlag)
    }
})

const registerPasswordRepeatLabel = createLabel()
setFor(registerPasswordRepeatLabel, 'passwordrepeat')
setTextContent(registerPasswordRepeatLabel, 'Repeat Password')
addChild(registerForm, registerPasswordRepeatLabel)

const registerPasswordRepeatInput = createInput()
setId(registerPasswordRepeatInput, 'passwordrepeat')
setType(registerPasswordRepeatInput, 'password')
setClass(registerPasswordRepeatInput, 'border px-1 rounded-xl')
addChild(registerForm, registerPasswordRepeatInput)

const registerShowPasswordRepeatButton = createButton()
setTextContent(registerShowPasswordRepeatButton, 'Show')
setType(registerShowPasswordRepeatButton, 'button')
setClass(registerShowPasswordRepeatButton, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-end')
addChild(registerForm, registerShowPasswordRepeatButton)

registerShowPasswordRepeatButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(registerPasswordRepeatInput) === 'password') {
        setType(registerPasswordRepeatInput = 'text')
        setTextContent(registerShowPasswordRepeatButton, 'Hide')
        setClass(registerPasswordRepeatInput, 'border px-1 bg-[gold] rounded-xl')
    } else {
        setType(registerPasswordRepeatInput = 'password')
        setTextContent(registerShowPasswordRepeatButton, 'Show')
        setClass(registerPasswordRepeatInput, 'border px-1 rounded-xl')
    }
})

const pwdRepeatCapsFlag = createSpan()
setTextContent(pwdRepeatCapsFlag, '⬆')
hideView(pwdRepeatCapsFlag)
setClass(pwdRepeatCapsFlag, 'self-end')
addChild(registerForm, pwdRepeatCapsFlag)

registerPasswordRepeatInput.addEventListener('keydown', function (event) {
    if (event.getModifierState('CapsLock')) {
        showView(pwdRepeatCapsFlag)
    } else {
        hideView(pwdRepeatCapsFlag)
    }
})

const registerSubmitButton = createButton()
setTextContent(registerSubmitButton, 'Register')
setType(registerSubmitButton, 'submit')
setClass(registerSubmitButton, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-center px-1')
addChild(registerForm, registerSubmitButton)
addChild(registerView, registerForm)

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = getValue(registerNameInput)
    const email = getValue(registerEmailInput)
    const username = getValue(registerUsernameInput)
    const password = getValue(registerPasswordInput)
    const passwordRepeat = getValue(registerPasswordRepeatInput)

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)

        registerForm.reset()
        setTextContent(registerFeedback, '')

        hideView(registerView)
        showView(loginView)
    } catch (error) {
        setTextContent(registerFeedback, error.message)
    }
})

const registerLoginLink = createLink()
setTextContent(registerLoginLink, 'Login')
setClass(registerLoginLink, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] px-2 mt-4')
addChild(registerView, registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(registerView)
    showView(loginView)
})



const registerFeedback = createParagraph()
addChild(registerView, registerFeedback)

addChild(document.body, registerView)
