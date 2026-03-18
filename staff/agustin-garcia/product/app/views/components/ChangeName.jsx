import { Form } from './commons/Form'
import { Field } from './commons/Field'
import { Button } from './commons/Button'

import { useContext } from '../../context'

import { logic } from '../../logic'
import { useEffect, useState } from 'react'

export function ChangeName({ }) {
    console.log('ChangeName -> call')

    const { onSuccess, onError } = useContext()

    const [name, setName] = useState('')


    useEffect(() => {
        try {
            logic.getLoggedInUser()
                .then(user => setName(user.name))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    const handleChangeNameSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value

        try {
            logic.changeName(name)
                .then(() => onSuccess('user name successfully updated'))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    console.log('ChangeName -> render')

    return (
        <div className="p-4">
            <Form onSubmit={handleChangeNameSubmit}>
                <Field alias="name" type="text" defaultValue={name}>Name</Field>

                <Button className="self-center px-2 mt-4" type="submit">
                    Update Name
                </Button>
            </Form>
        </div>
    )
}
