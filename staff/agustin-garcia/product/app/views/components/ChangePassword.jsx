import { useState } from 'react'

import { Form } from './commons/Form'
import { PasswordField } from './commons/PasswordField'
import { Button } from './commons/Button'
import { Feedback } from './commons/Feedback'

import { logic } from '../../logic'


export function ChangePassword() {
    console.log('ChangePassword -> call')

    const [feedback, setFeedback] = useState(null)

    const handleChangePasswordSubmit = event => {
        event.preventDefault()

        const form = event.target

        const password = form.password.value
        const newPassword = form.newPassword.value
        const newPasswordRepeat = form.newPasswordRepeat.value

        try {
            logic.changePassword(password, newPassword, newPasswordRepeat)
                .then(() => {
                    form.reset()

                    setFeedback({ message: 'user password successfully updated', level: 'success' })
                })
                .catch(error => setFeedback({ message: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ message: error.message, level: 'error' })
        }
    }

    console.log('ChangePassword -> render')
    return <div className="p-4">

        <Form onSubmit={handleChangePasswordSubmit}>
            <PasswordField alias="password">Current Password</PasswordField>

            <PasswordField alias="newPassword">New Password</PasswordField>

            <PasswordField alias="newPasswordRepeat">New Password Repeat</PasswordField>

            <Button className="self-center px-2 mt-4" type="submit">Change Password</Button>
        </Form>

        {feedback && <Feedback feedback={feedback} />}
    </div>
}
