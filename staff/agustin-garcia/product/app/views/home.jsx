import { useState, useEffect } from 'react'

import { Links } from './components/commons/Links'
import { Button } from './components/commons/Button'
import { PetList } from './components/PetList'
import { Feedback } from './components/commons/Feedback'
import { Spinner } from './components/Spinner'

import { logic } from '../logic'


export function Home({ onGoToAddPet,  onUserLoggedOut, onGoToProfile, onGoToPetDetail }) {
    console.log('Home -> call')

    const [feedback, setFeedback] = useState(null)
    const [name, setName] = useState(null)
    const [image, setImage] = useState('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm1yaDI2YzRvbDMweTl5aHl5OXJlZzNhdzN0eTBmdzVjYjRkdWF4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kDs1ljYIdiV4SZXqcp/giphy.gif')

    useEffect(() => {
        setTimeout(() => {
            try {
                logic.getLoggedInUser()
                    .then(user => {
                        setName(user.name)
                        setImage(user.image || image)
                    })
                    .catch(error => setFeedback({ message: error.message, level: 'error' }))
            } catch (error) {
                setFeedback({ message: error.message, level: 'error' })
            }
        }, 1000)
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
            setFeedback('sorry, there was an error on logout, please, try it later')
        }
    }

    const handleGoToPetDetail = petId => onGoToPetDetail(petId)

    console.log('Home -> render')

    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        {name ? <>
            <h2 className="font-bold flex gap-2 items-center">Hello, {name}! <img className="rounded-full w-10 h-10 object-cover" src={image} /></h2>

            <div className="flex justify-between">
                <Links onClick={handleAddPetClick}>+ Pet</Links>

                <Links onClick={handleProfileClick}>Profile</Links>

                <Button type="button" onClick={handleLogoutClick}>Logout</Button>
            </div>

            <PetList onGoToPetDetail={handleGoToPetDetail} />

            {feedback && <Feedback feedback={feedback} />}
        </> : <Spinner />}
    </div>
}