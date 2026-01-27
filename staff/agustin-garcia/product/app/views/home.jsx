import { useState, useEffect } from 'react'

import { Links } from './components/commons/Links'
import { Button } from './components/commons/Button'
import { PetList } from './components/PetList'
import { logic } from '../logic'


export function Home({ onGoToAddPet, onGoToLogin, onGoToProfile }) {
    console.log('Home -> call')

    const [message, setMessage] = useState('')

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

            setMessage('')

            onGoToLogin()
        } catch (error) {
            setMessage('sorry, there was an error on logout, please, try it later')
        }
    }

    console.log('Home -> render')

    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <h2>Welcome Home</h2>

        <div className="flex">
            <Links onClick={handleAddPetClick}>+ Pet</Links>
            <Links onClick={handleProfileClick}>Profile</Links>
            <Button type="button" className='ml-auto ' onClick={handleLogoutClick}>Logout</Button>
        </div>

        <PetList />

        <p>{message}</p>
    </div >
}