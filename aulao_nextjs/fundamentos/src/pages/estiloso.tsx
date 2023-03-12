import Layout from '@/components/Layout'
import styles from '@/styles/Estiloso.module.scss'
export default function Estiloso(): JSX.Element{
 return(
    <Layout titulo={'Exemplo de CSS Modularizado'}>
        <div className={styles.roxo}>
            <h1>Estilo usando CSS Módulos</h1>
        </div>

    </Layout>
 )
}