import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { getDatabaseData } from './api/numeroAleatorio'
export async function getStaticProps(){
    //vamos fingir que vai pegar do banco de dados
    const result = await JSON.parse(getDatabaseData())
    return {
        props: {... result}
    }
}


export default function Estatico(props:{numero:number, palavraAleatoria:string}){

    const [valorDinamico,setValorDinamico] = useState({
        numero: 0,
        palavraAleatoria: ''
    })

    const [valorProps,setProps] = useState(props)

    function obterValorDinamico(){
        fetch('/api/numeroAleatorio')
            .then(resp => resp.json())
            .then(valor => setValorDinamico(valor))
    }
    function atualizarValorEstatico(){
        fetch('/api/numeroAleatorio')
            .then(resp => resp.json())
            .then(valor => setProps(valor))
    }
    useEffect(obterValorDinamico,[])
    return(
        <Layout titulo={'Conteúdo Estático'}>
            <div>{valorProps.numero}</div>
            <div>{valorProps.palavraAleatoria}</div>
            <hr />
            <div>Conteudo Dinâmico</div>
            <div>{valorDinamico.numero}</div>
            <div>{valorDinamico.palavraAleatoria}</div>

            <button onClick={obterValorDinamico}>Atualizar valor</button>
            <button onClick={atualizarValorEstatico}>Atualizar valor Estatico</button>
        </Layout>
    )
}