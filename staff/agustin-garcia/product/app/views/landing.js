const landingView = createView()

const landingTitle = createTitle()
setTextContent(landingTitle, 'MyPet')
setClass(landingTitle, 'text-3xl font-bold')
addChild(landingView, landingTitle)

const landingWelcome = createParagraph()
setTextContent(landingWelcome, 'Welcome!')
setClass(landingWelcome, 'text-3xl')
addChild(landingView, landingWelcome)


const landingNavigation = createNavigation()

const landingLoginLink = createLink()
setTextContent(landingLoginLink, 'Login')
setClass(landingLoginLink, 'text-white rounded-xl bg-[black] px-2')
addChild(landingNavigation, landingLoginLink)

const landingOrText = createTextNode(' or ')
addChild(landingNavigation, landingOrText)

const landingRegisterLink = createLink()
setTextContent(landingRegisterLink, 'Register')
setClass(landingRegisterLink, 'text-white rounded-xl bg-[black] px-2')
addChild(landingNavigation, landingRegisterLink)

addChild(landingView, landingNavigation)

landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(landingView)
    showView(loginView)
})

landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(landingView)
    showView(registerView)
})

addChild(document.body, landingView)