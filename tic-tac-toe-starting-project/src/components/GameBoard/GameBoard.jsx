const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initalGameBoard;

    for (const turn of turns) {
        gameBoard[turn.square.row][turn.square.column] = turn.player;
    }

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex} id={`row-${rowIndex}`}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} id={`cell-${rowIndex}-${colIndex}`}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
