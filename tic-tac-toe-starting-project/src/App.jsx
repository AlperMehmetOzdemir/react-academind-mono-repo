import { useState } from "react"

import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [activePlayer, setActivePlayer] = useState("X");

    function handleSelectSquare(rowIndex, columnIndex) {
        setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
        setGameTurns(prevTurns => {
            let curentPlayer = "X";

            if (prevTurns.length > 0 && prevTurns[0].player === "X") {
                curentPlayer = "O";
            }

            const newTurn = {
                square: {
                    row: rowIndex,
                    column: columnIndex
                },
                player: curentPlayer
            }

            return [newTurn, ...prevTurns]
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player playerName="Player 1" playerSymbol="X" isActive={activePlayer === "X"} />
                    <Player playerName="Player 2" playerSymbol="O" isActive={activePlayer === "O"} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
            </div>
            <Log turns={gameTurns}></Log>
        </main>
    )
}

export default App
