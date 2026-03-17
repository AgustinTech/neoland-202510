import { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import { Links } from './components/commons/Links'
import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { Button } from './components/commons/Button'
import { Spinner } from './components/Spinner'

import { logic } from '../logic'


export function ModifyPet({ onGoBack, onError, onSuccess }) {
    console.log('modifyPet -> call')

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
    })

    const handleBackClick = event => {
        event.preventDefault()

        onGoBack(petId)
    }

    const handleModifyPetSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.modifyPet(petId, name, birthdate, weight, image)
                .then(() => onSuccess('pet successfully modified'))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }


    console.log('modifyPet -> render')
    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Modify Pet</h2>

            <Links href="" onClick={handleBackClick}>&lt; Back</Links>
        </div>

        {pet ? (() => {
            const zuluDate = new Date(pet.birthdate)
            const offsetMillis = zuluDate.getTimezoneOffset() * 60 * 1000
            const localDate = new Date(zuluDate.getTime() - offsetMillis)
            const locaDateString = localDate.toISOString().split('T')[0]

            return <Form onSubmit={handleModifyPetSubmit}>
                <Field alias="name" type="text" defaultValue={pet.name}>Name</Field>

                <Field alias="birthdate" type="date" defaultValue={locaDateString}>Birthdate</Field>

                <Field alias="weight" type="number" defaultValue={pet.weight} step="0.1">Weight (kg)</Field>

                <Field alias="image" type="url" defaultValue={pet.image}>Image</Field>

                <Button className="self-center px-2 mt-4" type="submit">Modify Pet</Button>
            </Form>
        })() : <Spinner />}

    </div>
}
