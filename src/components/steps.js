import React from "react";
import One from "./step1";
import Two from "./step2";
import Three from "./step3";


function Steps(){
    return(
        <div className="steps">
            <h1>Step By Step Guide</h1>
            <div className="one">
                <h3>Step one</h3>
                <One />
            </div>
            <div className="two">
                <h3>Step Two</h3>
                <Two />
            </div>
            <div className="three">
                <h3>Step Three</h3>
                <Three />
            </div>
        </div>

    )
}

export default Steps