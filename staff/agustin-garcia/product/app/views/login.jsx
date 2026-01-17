const { useState } = React

function Login({ onGoToHome, onGoToRegister }) {
    console.log('Login -> call')

    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')

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
            setPasswordType('password')

            onGoToHome()
        } catch (error) {
            setMessage(error.message)
        }

    }

    const handleTogglePasswordClick = event => {
        event.preventDefault()

        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }


    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <h2 className="font-bold">Login </h2>

        <form className="flex flex-col" onSubmit={handleLoginSubmit}>
            <label htmlFor="username">Username</label>

            <Input type="text" name="username" id="username" autoComplete="username" />

            <label htmlFor="password">Password</label>

            <Input id="password" name="password" autoComplete="current-password" type={passwordType} className="text-lg" />

            <Button type='button' onClick={handleTogglePasswordClick} className="self-end" >{passwordType === 'password' ? 'Show' : 'Hide'}</Button>

            <Button className="self-center px-2 mt-4" type="submit">Login</Button>

        </form>

        <Links onClick={handleRegisterClick}>Register</Links>

        <p>{message}</p>
    </div>
}