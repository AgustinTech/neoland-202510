export function Input({ alias, type, step, autoComplete, defaultValue }) {

    const useGoldBackground = (alias === 'password' || alias === 'passwordRepeat') && type !== 'password'
    const inputClass = `border px-1 rounded-xl ${useGoldBackground ? 'bg-[gold]' : ''}`

    return <input type={type} name={alias} id={alias} step={step} autoComplete={autoComplete} className={inputClass} defaultValue={defaultValue} />
}