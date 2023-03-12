export default function Cabecalho(props:{titulo:String}){
    // props é somente leitura
    console.log(props)
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}