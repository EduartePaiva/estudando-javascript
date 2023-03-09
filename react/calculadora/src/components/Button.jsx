import React from "react";
import './Button.css'

function determinaQualBotao(props) {
    switch (props.label) {
        case '/':
            return 'operador'
        case '*':
            return 'operador'
        case '+':
            return 'operador'
        case '-':
            return 'operador'
        case 'AC':
            return 'ac'
        case '0':
            return 'zero'
        default:
            return 'numero'
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <button className={`button ${determinaQualBotao(props)}`}
        onClick={e => props.click && props.click(props.label)}
    >{props.label}

    </button>
