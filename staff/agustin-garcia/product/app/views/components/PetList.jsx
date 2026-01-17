const { useState, useEffect } = React

function PetList() {
    console.log('PetList -> call')

    const [petId, setPetId] = useState(null)
    const [pets, setPets] = useState([])
    const [message, setMessage] = useState('')
    const [showPanel, setShowPanel] = useState(false)

    useEffect(() => {
        console.log('PetList -> useEffect')
        try {
            const pets = logic.getPets()

            setPets(pets)
        } catch (error) {
            setMessage(error.message)
        }
    }, [])

    const handleDeletePetClick = event => {
        event.preventDefault()

        const pet = event.target
        const petId = pet.id

        setPetId(petId)
        setShowPanel(true)
    }

    const handleCancelDeleteClick = event => {
        event.preventDefault()
        setShowPanel(false)
        setPetId(null)
    }

    const handleConfirmDeleteClick = event => {
        event.preventDefault()

        try {
            logic.deletePet(petId)

            const pets = logic.getPets()
            setPets(pets)

            setShowPanel(false)
            setPetId(null)
            setMessage('')
        } catch (error) {
            setMessage(error.message)
            setShowPanel(false)
            setPetId(null)
        }
    }

    console.log('PetList -> render')

    const petItems = []

    for (const pet of pets) {
        const petItem = <li key={pet.id} className="flex items-center justify-between gap-4 mb-2 border-2 border-gray-600 p-2 rounded-md max-w-sm w-full ">

            <div className="flex items-center gap-4">
                <img src={pet.image} className="rounded-full w-20 h-20 object-cover" />

                <p className="font-bold">{pet.name}</p>
            </div>

            <button className="justify-self-end cursor-pointer" id={pet.id} onClick={handleDeletePetClick}>🗑️</button>
        </li>

        petItems.push(petItem)
    }

    return <div>
        <ul className="flex flex-col gap-2 mt-2">
            {petItems}
        </ul>

        {showPanel && < div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center panel">
            <div className="bg-white border-black border-2 p-2 rounded-lg">
                <p className="text-center mb-4 font-bold">Delete Pet?</p>

                <div className="flex justify-center gap-4">
                    <button className="cursor-pointer text-2xl" onClick={handleCancelDeleteClick}>❌</button>
                    <button className="cursor-pointer text-2xl" onClick={handleConfirmDeleteClick}>✅</button>
                </div>
            </div>
        </div>
        }

        <p>{message}</p>
    </div>
}