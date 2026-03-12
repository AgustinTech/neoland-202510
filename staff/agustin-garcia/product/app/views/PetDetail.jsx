import { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import { Links } from './components/commons/Links'
import { Feedback } from './components/commons/Feedback'
import { Button } from './components/commons/Button'

import { logic } from '../logic'

export function PetDetail({ onGoToHome, onGoToModifyPet }) {
    console.log('PetDetail -> call')

    const [pet, setPet] = useState(null)

    const { petId } = useParams()

    useEffect(() => {
        try {
            logic.getPet(petId)
                .then(pet => setPet(pet))
                .catch(error => onError(error))
        } catch (error) {
           onError(error)
        }
    }, [])


    const handleBackClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleGoToModifyPet = () => onGoToModifyPet(petId)


    console.log('PetDetail -> render')

    return <div className='p-4'>
        <h1 className='font-bold text-xl'>MyPet</h1>

        <div className='flex justify-between'>
            <h2 className='font-bold'>Pet</h2>

            <Links onClick={handleBackClick}> &lt; Back </Links>
        </div>


        {pet && <div className='flex flex-col items-center gap-4'>
            <img src={pet.image} className='rounded-full w-40 h-40 object-cover' />

            <p>{pet.name}</p>

            <p>{pet.weight}Kg</p>

            <p>{pet.birthdate}</p>


            <Button className='cursor-pointer' onClick={handleGoToModifyPet}>Modify</Button>
        </div>}

        {feedback && <Feedback feedback={feedback} />}
    </div>
}
