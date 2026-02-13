import { useState, useEffect } from 'react'

import { Links } from './components/commons/Links'
import { Button } from './components/commons/Button'
import { PetList } from './components/PetList'
import { Feedback } from './components/commons/Feedback'

import { logic } from '../logic'


export function Home({ onGoToAddPet, onGoToLogin, onGoToProfile, onGoToPetDetail }) {
    console.log('Home -> call')

    const [feedback, setFeedback] = useState(null)

    const handleAddPetClick = event => {
        event.preventDefault()

        onGoToAddPet()
    }

    const handleProfileClick = event => {
        event.preventDefault()

        onGoToProfile()
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            setFeedback(null)

            onGoToLogin()
        } catch (error) {
            setMessage('sorry, there was an error on logout, please, try it later')
        }
    }

    const handleGoToPetDetail = petId => onGoToPetDetail(petId)

    console.log('Home -> render')

    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <h2>Welcome Home</h2>

        <div className="flex">
            <Links onClick={handleAddPetClick}>+ Pet</Links>

            <Links onClick={handleProfileClick}>Profile</Links>

            <Button type="button" className='ml-auto ' onClick={handleLogoutClick}>Logout</Button>
        </div>

        <PetList onGoToPetDetail={handleGoToPetDetail} />

        {feedback && <Feedback feedback={feedback} />}
    </div >
}