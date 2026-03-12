import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { PasswordField } from './components/commons/PasswordField'
import { Button } from './components/commons/Button'
import { Links } from './components/commons/Links'

import { logic } from '../logic'


export function Register({ onGoToLogin, onError }) {
    console.log('Register -> call')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)
                .then(() => {
                    form.reset()

                    onGoToLogin()
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

        const handleLoginClick = event => {
            event.preventDefault()

            onGoToLogin()
        }

        console.log('Register -> render')

        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

            <h2 className="font-bold">Register</h2>

            <Form onSubmit={handleRegisterSubmit}>
                <Field alias="name" type="text">Name</Field>

                <Field alias="email" type="email">E-mail</Field>

                <Field alias="username" type="text">Username</Field>

                <PasswordField alias="password">Password</PasswordField>

                <PasswordField alias="passwordRepeat">Repeat Password</PasswordField>

                <Button className="self-center px-2 mt-4" type="submit">Register</Button>
            </Form>

            <Links onClick={handleLoginClick}>Login</Links>
        </div >
}