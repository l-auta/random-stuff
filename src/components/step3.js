import React, {useState} from "react";
import BattleshipBoardThree from "../stepThreeBoard";

function Three(){
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <p>To win a game, one player has to sink all the ships of the other player. Sinking a ship simply translates to all the coordinates of a ship's position being hit, in that all its holes are filled with red pegs. The owner of the ship should announce when a ship is sunk and what ship it was. The player should keep track of how many of their opponent's ship they have sunk by placing a red flag for each ship sunk at the top of the game</p>
            <button className="bnt-one" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Board
            </button>
            <p><i>(ships 1A to 1D and 7A to 9A have been sunk)</i></p>
            {isVisible && <BattleshipBoardThree />} {/* Conditionally render BattleshipBoard */}
        </div>
    )
}

export default Three