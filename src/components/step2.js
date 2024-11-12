import React, {useState} from "react";
import BattleshipBoardTwo from "./stepTwoBoard";

function Two(){
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <p>After deciding on who should start, the one playing should call their shot to try and hit the opponent's ships. Clling a shot means that the player should pick a target hole on their upper grid and call out its coordinates(which can be named in terms of numbers and letters). To determine each coordinate, find its corresponding number on the left side of the grid and its letter on the top</p>
            <p>If the player calls out a shot location that is occupied by a ship,the shot qualifies as a hit! The opponent then says the ship that has been hit. The player records the hit by placing a red peg in the corresponding target hole in their target grid. The opponent too places a red peg in the corresponding hole of the ship the player has hit on their ocean grid</p>
            <p>However, if the player calls out a location not occupied by a ship on the opponent's ocean grid, it is considered a miss! The player records their miss by placing a white peg in the corresponding target hole on their target grid so as not to call it again. On the other hand, the opponent can choose not to mark the player's miss on their ocean grid</p>
            <button className="bnt-one" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Board
            </button>
            {isVisible && <BattleshipBoardTwo />} {/* Conditionally render BattleshipBoard */}
        </div>
    )

}

export default Two