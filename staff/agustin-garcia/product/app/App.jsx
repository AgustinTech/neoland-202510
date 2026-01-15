const { useState } = React

function App() {
    console.log('App -> call')

    const [view, setView] = useState('landing')

    const handleLoginClick = () => {
        setView('login')
    }

    const handleLogout = () => {
        setView('login')
    }

    const handleBackHomeClick = event => {
        setView('home')
    }

    const handleRegisterClick = () => {
        setView('register')
    }

    const handleLogin = () => {
        setView('home')
    }

    const handleRegister = () => {
        setView('login')
    }

    const handleAddPetClick = () => {
        setView('add-pet')
    }

    const handleAddPet = () => {
        setView('home')
    }

    console.log('App -> render')

    if (view === 'landing')
        return <Landing onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />


    if (view === 'login')
        return <Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} />


    if (view === 'register')
        return <Register onRegister={handleRegister} onLoginClick={handleLoginClick} />

    if (view === 'home') {
        return <Home onAddPetClick={handleAddPetClick} onLogout={handleLogout} />
    }

    if (view === 'add-pet')
        return <AddPet onBackHome={handleBackHomeClick} onAddPet={handleAddPet} />
}