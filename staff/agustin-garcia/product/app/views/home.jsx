const { useState, useEffect } = React

function Home({ onGoToAddPet, onGoToLogin }) {
    console.log('Home -> call')

    const [message, setMessage] = useState('')

    const handleAddPetClick = event => {
        event.preventDefault()

        onGoToAddPet()
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            setMessage('')

            onGoToLogin()
        } catch (error) {
            setMessage('sorry, there was an error on logout, please, try it later')
        }
    }

    console.log('Home -> render')

    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <h2>Welcome Home</h2>

        <div className="flex justify-between">
            <Button type="button" onClick={handleAddPetClick}>+ Pet</Button>
            <Button type="button" onClick={handleLogoutClick}>Logout</Button>
        </div>

        <PetList />

        <p>{message}</p>
    </div >
}