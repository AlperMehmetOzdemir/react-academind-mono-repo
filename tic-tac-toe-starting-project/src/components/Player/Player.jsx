import { useState } from "react"

export default function Player({ playerName: initialName, playerSymbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)

    function handleEditClick() {
        setIsEditing((prevState) => !prevState)
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {isEditing ? (
                    <input
                        id="player-name-input"
                        type="text"
                        value={playerName}
                        onChange={handleChange} />
                ) : (
                    <span className="player-name">{playerName}</span>
                )}

                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    )
}
