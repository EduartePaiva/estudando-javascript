import Link from "next/link";
import styles from '@/styles/Layout.module.scss'

export default function Layout(props:{children:any,titulo:String}){
    return(
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <Link href={'/'}>Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}