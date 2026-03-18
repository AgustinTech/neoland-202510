import { useState, useEffect } from 'react'

import { Button } from './commons/Button'
import { PetItem } from './PetItem'

import { useContext } from '../../context'

import { logic } from '../../logic'


export function PetList({ onGoToPetDetail }) {
    console.log('PetList -> call')

    const { onError } = useContext()

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
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
            setShowPanel(false)
            setPetId(null)
        }
    }

    console.log('PetList -> render')

    return <div>
        <ul className='flex flex-col gap-2 mt-2'>
            {pets.map(pet => (
                <PetItem key={pet.id} pet={pet} onGoToPetDetail={onGoToPetDetail} onDeletePetClick={handleDeletePetClick} />))}
        </ul>

        {showPanel && (
            <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center panel">

                <div className="bg-white border-black border-2 p-2 rounded-lg">
                    <p className="text-center mb-4 font-bold">Delete Pet?</p>

                    <div className="flex justify-center gap-4">
                        <Button className="cursor-pointer text-2xl bg-white" onClick={handleCancelDeleteClick}>❌</Button>
                        <Button className="cursor-pointer text-2xl bg-white" onClick={handleConfirmDeleteClick}>✅</Button>
                    </div>
                </div>
            </div>)}
    </div>
}