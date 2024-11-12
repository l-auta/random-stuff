import React, {useState} from "react";
import BattleshipBoard from "./stepOneBoard";

function One(){
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div >
        <p>You and your opponent must place your 5 ships on the grid of your boxes. Do not look at what your opponent is doing, and make sure they can not see your ship configuration either. Follow these rules while placing your ships:</p>
      <ul>
        <li>Ships can be placed horizontally or vertically, but not diagonally, without overlapping each other</li>
        <li>You must place all five ships on the grid.</li>
        <li>Every ship must be completely on the grid. No ship can hang off the edge of the board.</li>
        <li>Once your ships are placed and the game has begun, you are not allowed to move your ships again.</li>
      </ul>
        <button className="bnt-one" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Board
        </button>
        {isVisible && <BattleshipBoard />} {/* Conditionally render BattleshipBoard */}
      </div>
    );
}

export default One