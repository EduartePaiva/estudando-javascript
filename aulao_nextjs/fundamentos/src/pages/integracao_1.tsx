import Layout from "@/components/Layout"
import { useState } from "react"

export default function Integracao(){
    const [cliente,setCliente] = useState({
        id:0,
        nome:'',
        idade:0,
        email:''
    })
    const [codigo,setCodigo] = useState('1')

    function obterCliente(){
        fetch(`/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
            .then(e=> console.log('teste'))

    }


    return(
        <Layout titulo={'Integração 1'}>
            <div>
                <input onChange={e => setCodigo(e.target.value)} type="number" value={codigo}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>

            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
                <li>Idade: {cliente.idade}</li>
            </ul>
        </Layout>
    ) 
}