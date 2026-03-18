import { Form } from './commons/Form'
import { PasswordField } from './commons/PasswordField'
import { Button } from './commons/Button'

import { useContext } from '../../context'

import { logic } from '../../logic'


export function ChangePassword({ }) {
    console.log('ChangePassword -> call')

    const { onSuccess, onError } = useContext()

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

                    onSuccess('user password successfully updated')
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
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
    </div>
}
