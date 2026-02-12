import { useState } from 'react'

import { Links } from './components/commons/Links'
import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { Button } from './components/commons/Button'
import { Feedback } from './components/commons/Feedback'

import { logic } from '../logic'


export function AddPet({ onGoToHome }) {
    console.log('AddPet -> call')

        const [feedback, setFeedback] = useState(null)

    const handleBackHomeClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleAddPetSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.addPet(name, birthdate, weight, image)
                .then(() => {
                    form.reset()

                    onGoToHome()
                })
                .catch(error => setFeedback({message: error.message, level:'error'}))
        } catch (error) {
            setFeedback({message: error.message, level: 'error'})
        }
    }


    console.log('AddPet -> render')
    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Add Pet</h2>

            <Links href="" onClick={handleBackHomeClick}>&lt; Back</Links>
        </div>

        <Form onSubmit={handleAddPetSubmit}>
            <Field alias="name" type="text">Name</Field>

            <Field alias="birthdate" type="date">Birthdate</Field>

            <Field alias="weight" type="number">Weight (kg)</Field>

            <Field alias="image" type="url">Image</Field>

            <Button className="self-center px-2 mt-4" type="submit">Add Pet</Button>
        </Form>

        {feedback && <Feedback  feedback={feedback}/>}
    </div>
}
