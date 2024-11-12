import React from "react";
import One from "./step1";
import Two from "./step2";
import Three from "./step3";

function Steps(){
    return(
        <div>
            <div className="one">
                <One />
            </div>
            <div className="two">
                <Two />
            </div>
            <div className="three">
                <Three />
            </div>
        </div>

    )
}

export default Steps