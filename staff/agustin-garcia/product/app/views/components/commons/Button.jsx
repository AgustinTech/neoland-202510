export function Button({   id, children, type, className, onClick }) {
    return <button id={id} onClick={onClick} className={`text-white rounded-xl bg-[black] px-1 cursor-pointer" ${className}`} type={type}>{children}</button>
}