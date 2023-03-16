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
           <Navegador cor={'blue'} texto={'Navegação #02'} destino={'/cliente/sp-2/123'}/>
           <Navegador cor={'red'} texto={'Componente com Estado'} destino={'/estado'}/>
           <Navegador cor={'#42a9a9'} texto={'Integração com API #01'} destino={'/integracao_1'}/>
           <Navegador cor='#fa054a' texto={'Conteúdo Estático'} destino={'/estatico'}/>
        </div>
    )
}