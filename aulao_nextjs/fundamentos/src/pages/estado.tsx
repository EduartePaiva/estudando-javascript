import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado(){
    const [numero,alterarNumero] = useState(0) //React Hooks

    function incrementar(){
        alterarNumero(numero + 1)
    }

    return(
        <Layout titulo={'Compomente com Estado'}>
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}