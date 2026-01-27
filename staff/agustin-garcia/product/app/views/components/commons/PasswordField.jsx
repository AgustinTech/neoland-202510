import { useState } from 'react'

import { Label } from './Label'
import { Input } from './Input'

export function PasswordField({ alias, children }) {
    const [type, setType] = useState('password')

    const handleTogglePasswordClick = event => {
        event.preventDefault()

        setType(type === 'password' ? 'text' : 'password')
    }

    return <div className="flex flex-col">
        <Label alias={alias} htmlFor={alias} >{children}</Label>
        <Input alias={alias} type={type} autoComplete="off" className={type === 'password' ? 'border px-1 rounded-xl' : 'border px-1 rounded-xl bg-[gold]'} />
        <button className="self-end text-white rounded-xl bg-[black] px-1 cursor-pointer" type="button" onClick={handleTogglePasswordClick}>{type === 'password' ? 'Show' : 'Hide'}</button>
    </div>
}