import { useState, useEffect } from 'react'

import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './views/Landing'
import { Login } from './views/Login'
import { Register } from './views/Register'
import { Home } from './views/Home'
import { AddPet } from './views/AddPet'
import { Profile } from './views/Profile'
import { PetDetail } from './views/PetDetail'
import { ModifyPet } from './views/ModifyPet'
import { Feedback } from './views/components/commons/Feedback'

import { logic } from './logic'

export function App() {
    console.log('App -> call')

    const [feedback, setFeedback] = useState(null)
    const [petId, setPetId] = useState(null)
    let loggedIn = false

    const navigate = useNavigate()

    try {
         loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        setFeedback({ message: error.message, level: 'error' })
    }

    const handleGoToLogin = () => navigate('/login')

    const handleGoToRegister = () => navigate('/register')

    const handleGoToHome = () => navigate('/')

    const handleGoToAddPet = () => navigate('/add-pet')

    const handleGoToProfile = () => navigate('/profile')

    const handleGoToPetDetailById = petId => {
        setPetId(petId)

        handleGoToPetDetail()
    }

    const handleGoToPetDetail = () => navigate('/pet-detail')

    const handleGoToModifyPet = () => navigate('/modify-pet')

    const handleUserLoggedIn = () => {

        handleGoToHome()
    }


    const handleUserLoggedOut = () => {

        handleGoToLogin()
    }


    console.log('App -> render')

    return <>
        <Routes>
            <Route path="/" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister} />
                :
                <Home onGoToAddPet={handleGoToAddPet} onLogout={handleGoToLogin} onGoToProfile={handleGoToProfile} onGoToPetDetail={handleGoToPetDetailById} />
            } />

            <Route path="/login" element={!loggedIn ? <Login onUserLoggedIn={handleUserLoggedIn} onGoToRegister={handleGoToRegister} /> : <Navigate to="/" />} />
            <Route path="/register" element={!loggedIn ? <Register onGoToLogin={handleGoToLogin} /> : <Navigate to="/" />} />
            <Route path="/add-pet" element={loggedIn ? <AddPet onGoToHome={handleGoToHome} /> : <Navigate to="/login" />} />
            <Route path="/profile" element={loggedIn ? <Profile onGoToHome={handleGoToHome} /> : <Navigate to="/login" />} />
            <Route path="/pet-detail" element={loggedIn ? <PetDetail petId={petId} onGoToHome={handleGoToHome} onGoToModifyPet={handleGoToModifyPet} /> : <Navigate to="/login" />} />
            <Route path="/modify-pet" element={loggedIn ? <ModifyPet petId={petId} onGoBack={handleGoToPetDetail} /> : <Navigate to="/login" />} />
        </Routes>

        {feedback && <Feedback feedback={feedback} />}
    </>
}