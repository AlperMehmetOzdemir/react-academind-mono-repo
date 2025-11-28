export default function TabButton({ children, onClick, isSelected }) {
    return (
        <li>
            <button
                onClick={onClick}
                className={isSelected ? "active" : undefined}>
                {children}
            </button>
        </li>
    )
}