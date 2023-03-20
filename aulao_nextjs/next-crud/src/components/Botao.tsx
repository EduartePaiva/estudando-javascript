interface ButaoProps{
    children:any
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    onClick?: () => void
}

export default function Botao(props:ButaoProps){
    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-gray-50 px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}