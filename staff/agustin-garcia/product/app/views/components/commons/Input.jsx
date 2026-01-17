function Input({ type, name, id, step, autoComplete, placeholder, className }) {

    const useGoldBackground  = (id === 'password' || id === 'passwordRepeat') && type !== 'password'
    const inputClass = `border px-1 rounded-xl ${useGoldBackground  ? 'bg-[gold]' : ''} ${className || ''}`

    return <input type={type} name={name} id={id} step={step} autoComplete={autoComplete} placeholder={placeholder} className={inputClass}></input>
}