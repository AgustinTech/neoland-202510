const { useState } = React

function ChangePassword() {
    console.log('ChangePassword -> call')

    const [message, setMessage] = useState('')

    const handleChangePasswordSubmit = event => {
        event.preventDefault()

        const form = event.target

        const password = form.password.value
        const newPassword = form.newPassword.value
        const newPasswordRepeat = form.newPasswordRepeat.value

        try {
            logic.changePassword(password, newPassword, newPasswordRepeat)

            setMessage('New Password change successful')

            form.reset()
        } catch (error) {
            setMessage(error.message)
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

        <p>{message}</p>
    </div>
}
