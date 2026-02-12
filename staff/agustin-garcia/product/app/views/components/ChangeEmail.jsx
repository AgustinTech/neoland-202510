import { useState } from 'react'

import { Form } from './commons/Form'
import { Field } from './commons/Field'
import { Button } from './commons/Button'
import {Feedback} from './commons/Feedback'

import { logic } from '../../logic'


export function ChangeEmail() {
    console.log('ChangeEmail -> call')


    const [feedback, setFeedback] = useState(null)

    const handleChangeEmailSubmit = event => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const newEmail = form.newEmail.value
        const newEmailRepeat = form.newEmailRepeat.value

        try {
            logic.changeEmail(email, newEmail, newEmailRepeat)
                .then(() => {
                    form.reset()

                    setFeedback({ message:'user e-mail successfully updated', level:'success'})
                })
                .catch(error => setFeedback({ message: error.message, level:'error'}))
        } catch (error) {
            setFeedback({ message: error.message, level:'error'})
        }
    }

        console.log('ChangeEmail -> render')

        return (
            <div className="p-4">
                <Form onSubmit={handleChangeEmailSubmit}>
                    <Field alias="email" type="email">Current Email</Field>
                    <Field alias="newEmail" type="email">New Email</Field>
                    <Field alias="newEmailRepeat" type="email">Repeat New Email</Field>
                    <Button className="self-center px-2 mt-4" type="submit">
                        Change Email
                    </Button>
                </Form>

                {feedback && <Feedback  feedback={feedback}/>}
            </div>
        )
    }
