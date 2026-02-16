export function Button({   id, children, type, className, onClick, ...props }) {
    return <button id={id} onClick={onClick} {...props} className={`text-white rounded-xl bg-[black] px-1 cursor-pointer" ${className}`} type={type}>{children}</button>
}