import { useState, useEffect, use } from 'react'

import { Button } from './commons/Button'
import { Feedback } from './commons/Feedback'

import { logic } from '../../logic'


export function PetList() {
    console.log('PetList -> call')

    const [petId, setPetId] = useState(null)
    const [pets, setPets] = useState([])
    const [feedback, setFeedback] = useState(null)
    const [showPanel, setShowPanel] = useState(false)

    useEffect(() => {
        console.log('PetList -> useEffect')

        try {
            logic.getPets()
                .then(pets => {
                    setPets(pets)
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }, [])


    const handleDeletePetClick = event => {
        event.preventDefault()

        const pet = event.target
        const petId = pet.id

        setPetId(petId)
        setShowPanel(true)
    }

    const handleCancelDeleteClick = event => {
        event.preventDefault()
        setShowPanel(false)
        setPetId(null)
    }

    const handleConfirmDeleteClick = event => {
        event.preventDefault()

        try {
            logic.deletePet(petId)
                .then(() => {
                    return logic.getPets()
                })
                .then(pets => {
                    setPetId(null)
                    setPets(pets)
                    setShowPanel(false)
                })
                .catch(error => setFeedback({ message: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ message: error.message, level: 'error' })
            setShowPanel(false)
            setPetId(null)
        }
    }


    const handleGoToPetClick = event => {
        event.preventDefault()

        const li = event.target

        const petId = li.id

        console.log(petId)
    }

    console.log('PetList -> render')

    return <div>
        {
            pets.map(pet => <li id={pet.id} className="flex items-center justify-between gap-4 mb-2 border-2 border-gray-600 p-2 rounded-md max-w-sm w-full " onClick={handleGoToPetClick}>

                <div className="flex items-center gap-4">
                    <img src={pet.image} className="rounded-full w-20 h-20 object-cover" />

                    <p className="font-bold">{pet.name}</p>
                </div>

                <button className="justify-self-end cursor-pointer" id={pet.id} onClick={handleDeletePetClick}>🗑️</button>
            </li>)
        }

        {showPanel && < div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center panel">
            <div className="bg-white border-black border-2 p-2 rounded-lg">
                <p className="text-center mb-4 font-bold">Delete Pet?</p>

                <div className="flex justify-center gap-4">
                    <Button className="cursor-pointer text-2xl bg-white" onClick={handleCancelDeleteClick}>❌</Button>
                    <Button className="cursor-pointer text-2xl bg-white" onClick={handleConfirmDeleteClick}>✅</Button>
                </div>
            </div>
        </div>
        }

        {feedback && <Feedback feedback={feedback} />}
    </div>
}