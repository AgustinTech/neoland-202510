const { useState } = React

function Login({ onLogin, onRegisterClick }) {
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

            onLogin()
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

        onRegisterClick()
    }


    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <h2 className="font-bold">Login </h2>

        <form className="flex flex-col" onSubmit={handleLoginSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" autoComplete="username" className="border px-1 rounded-xl" />

            <label htmlFor="password">Password</label>
            <input id="password" name="password" autoComplete="current-password" type={passwordType} className={passwordType === 'password' ? 'border px-1 rounded-xl' : 'border px-1 rounded-xl bg-[gold]'} />

            <button type="button" className="text-white rounded-xl bg-[black] self-end cursor-pointer" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>
            <span className="self-end" style={{ display: 'none' }}>⬆</span>
            <button type="submit" className="text-white rounded-xl bg-[black] self-center px-2 mt-4 cursor-pointer">Login</button>

        </form>

        <a className="text-white rounded-xl bg-[black]  px-2 underline" onClick={handleRegisterClick}>Register</a>

        <p>{message}</p>
    </div>
}