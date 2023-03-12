import Navegador from "@/components/Navegador"

export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',

        }}>
           <Navegador cor={null} texto={'Estiloso'} destino={'/estiloso'}/>
           <Navegador cor={'#9400d3'} texto={'Exemplo'} destino={'/exemplo'}/>
           <Navegador cor={'crimson'} texto={'JSX'} destino={'/jsx'}/>
           <Navegador cor={'green'} texto={'Navegação #01'} destino={'/navegacao'}/>
        </div>
    )
}