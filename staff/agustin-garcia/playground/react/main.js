const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)


// landing

const landingTitle = React.createElement('h1', null, 'myPet')

const landingWelcome = React.createElement('h2', null, 'Welcome!')

const landingLoginLink = React.createElement('a', { href: '' }, 'Login')

const landingRegisterLink = React.createElement('a', { href: '' }, 'Register')

const landingNavigation = React.createElement('nav', null, [landingLoginLink, ' or ', landingRegisterLink])

const landingView = React.createElement('div', null, [landingTitle, landingWelcome, landingNavigation])

root.render(landingView)