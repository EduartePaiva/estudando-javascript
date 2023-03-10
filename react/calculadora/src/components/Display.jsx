import React from "react";
import './Display.css'



// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
      }

    return(
        <div className="display">
            <p className="paragrafo">
                {props.value}

            </p>
        </div>

    )
}

