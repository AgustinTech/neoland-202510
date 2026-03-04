import { useState, useEffect } from 'react'

import { Button } from './commons/Button'

import { logic } from '../../logic'


export function PetList({ onGoToPetDetail, onError }) {
    console.log('PetList -> call')

    const [petId, setPetId] = useState(null)
    const [pets, setPets] = useState([])
    const [showPanel, setShowPanel] = useState(false)

    useEffect(() => {
        console.log('PetList -> useEffect')

        try {
            logic.getPets()
                .then(pets => {
                    setPets(pets)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])


    const handleDeletePetClick = petId => {
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

    const handleGoToPetDetailClick = petId => onGoToPetDetail(petId)

    console.log('PetList -> render')

    return <div>
        {
            pets.map(pet =>
                <li data-pet-id={pet.id} className="flex items-center justify-between gap-4 mb-2 border-2 border-gray-600 p-2 rounded-md max-w-sm w-full " onClick={() => handleGoToPetDetailClick(pet.id)}>

                    <div className="flex items-center gap-4">
                        <img src={pet.image} className="rounded-full w-20 h-20 object-cover" />

                        <p className="font-bold">{pet.name}</p>
                    </div>

                    <Button className="justify-self-end" onClick={event => {
                        event.stopPropagation()

                        handleDeletePetClick(pet.id)
                    }}>🗑️</Button>
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

    </div>
}