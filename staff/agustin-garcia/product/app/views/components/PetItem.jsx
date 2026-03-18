import { Button } from "./commons/Button"

export function PetItem({ pet, onGoToPetDetail, onDeletePetClick }) {
    console.log('PetItem -> call')

    const handleGoToPetDetailClick = petId => onGoToPetDetail(petId)

    const handleDeletePetClick = petId => onDeletePetClick(petId)

    console.log('PetItem -> render')

    return < li className="flex items-center justify-between gap-4 mb-2 border-2 border-gray-600 p-2 rounded-md max-w-sm w-full " onClick={() => handleGoToPetDetailClick(pet.id)}>
        <div className="flex items-center gap-4">
            <img src={pet.image} className="rounded-full w-20 h-20 object-cover" />

            <p className="font-bold">{pet.name}</p>
        </div>

        <Button className="justify-self-end" onClick={event => {
            event.stopPropagation()

            handleDeletePetClick(pet.id)
        }}>🗑️</Button>
    </li >
}

