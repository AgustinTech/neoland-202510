import { Links } from "./components/commons/Links"

export function Landing({ onGoToLogin, onGoToRegister }) {
    console.log('Landing -> call')

    const handleLoginClick = event => {
        event.preventDefault()

        onGoToLogin()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }

    console.log('Landing - render')

    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>
        <p className="text-3xl">Welcome!</p>

        <nav>
            <Links onClick={handleLoginClick}>Login</Links> or <Links onClick={handleRegisterClick}>Register</Links>
        </nav>
    </div>
}