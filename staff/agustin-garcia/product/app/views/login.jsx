import { useState } from 'react'

import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { PasswordField } from './components/commons/PasswordField'
import { Button } from './components/commons/Button'
import { Links } from './components/commons/Links'

import { logic } from '../logic'

export function Login({ onGoToHome, onGoToRegister }) {
    console.log('Login -> call')

    const [message, setMessage] = useState('')

    console.log('Login -> render')

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value


        try {
            logic.loginUser(username, password)

            form.reset()

            setMessage('')

            onGoToHome()
        } catch (error) {
            setMessage(error.message)
        }

    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }

    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <h2 className="font-bold">Login </h2>

        <Form onSubmit={handleLoginSubmit}>
            <Field alias="username" type="text">Username</Field>

            <PasswordField alias="password">Password</PasswordField>

            <Button className="self-center px-2 mt-4" type="submit">Login</Button>
        </Form>

        <Links onClick={handleRegisterClick}>Register</Links>

        <p>{message}</p>
    </div>
}