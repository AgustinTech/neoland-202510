import { Form } from './commons/Form'
import { Field } from './commons/Field'
import { Button } from './commons/Button'

import { useContext } from '../../context'

import { logic } from '../../logic'
import { useEffect, useState } from 'react'

export function ChangeUsername({ }) {
    console.log('ChangeUsername -> call')

    const { onSuccess, onError } = useContext()

    const [username, setUsername] = useState('')


    useEffect(() => {
        try {
            logic.getLoggedInUser()
                .then(user => setUsername(user.username))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    const handleChangeUsernameSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value

        try {
            logic.changeUsername(username)
                .then(() => onSuccess('username successfully updated'))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    console.log('ChangeUsername -> render')

    return (
        <div className="p-4">
            <Form onSubmit={handleChangeUsernameSubmit}>
                <Field alias="username" type="text" defaultValue={username}>Username</Field>

                <Button className="self-center px-2 mt-4" type="submit">
                    Update Username
                </Button>
            </Form>
        </div>
    )
}
