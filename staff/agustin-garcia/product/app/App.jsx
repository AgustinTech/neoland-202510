import { useState } from 'react'

import { Landing } from './views/landing'
import { Login } from './views/login'
import { Register } from './views/register'
import { Home } from './views/home'
import { AddPet } from './views/add-pet'
import { Profile } from './views/Profile'

export function App() {
    console.log('App -> call')

    const [view, setView] = useState('landing')

    const handleGoToLogin = () => { setView('login') }

    const handleGoToHome = () => { setView('home') }

    const handleGoToRegister = () => { setView('register') }

    const handleLogin = () => { setView('home') }

    const handleGoToAddPet = () => { setView('add-pet') }

    const handleGoToProfile = () => { setView('profile') }

    console.log('App -> render')

    return <>

        {view === 'landing' && <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister} />}

        {view === 'login' && <Login onGoToHome={handleLogin} onGoToRegister={handleGoToRegister} />}

        {view === 'register' && <Register onGoToLogin={handleGoToLogin} />}

        {view === 'home' && <Home onGoToAddPet={handleGoToAddPet} onGoToLogin={handleGoToLogin} onGoToProfile={handleGoToProfile} />}

        {view === 'add-pet' && <AddPet onGoToHome={handleGoToHome} />}

        {view === 'profile' && <Profile onGoToHome={handleGoToHome} />}

    </>
}