export function Links({ hRef, onClick, children }) {
    return <a href={hRef} onClick={onClick} className="text-white  rounded-xl bg-[black] px-2 mt-4 underline text-sm cursor-pointer">{children}</a>
}