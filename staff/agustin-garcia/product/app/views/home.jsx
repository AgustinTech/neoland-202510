import { useState, useEffect } from 'react'

import { Links } from './components/commons/Links'
import { Button } from './components/commons/Button'
import { PetList } from './components/PetList'

import { logic } from '../logic'


export function Home({ onGoToAddPet, onUserLoggedOut, onGoToProfile, onGoToPetDetail, onError }) {
    console.log('Home -> call')

    const [name, setName] = useState(null)
    const [image, setImage] = useState('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm1yaDI2YzRvbDMweTl5aHl5OXJlZzNhdzN0eTBmdzVjYjRkdWF4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kDs1ljYIdiV4SZXqcp/giphy.gif')

    useEffect(() => {
        try {
            logic.getLoggedInUser()
                .then(user => {
                    setName(user.name)
                    setImage(user.image || image)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

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

            onUserLoggedOut()
        } catch (error) {
           onError(error)
        }
    }

    const handleGoToPetDetail = petId => onGoToPetDetail(petId)

    console.log('Home -> render')

    return <div className="p-4">
        <h1 className="font-bold text-3xl cursor-pointer">MyPet</h1>

        <h2 className="font-bold flex gap-2 items-center">Hello, {name || 'World'}! <img className="rounded-full w-10 h-10 object-cover" src={image} /></h2>

        <div className="flex justify-between">
            <Links onClick={handleAddPetClick}>+ Pet</Links>

            <Links onClick={handleProfileClick}>Profile</Links>

            <Button type="button" onClick={handleLogoutClick}>Logout</Button>
        </div>

        <PetList onGoToPetDetail={handleGoToPetDetail} onError={onError} />
    </div>
} 