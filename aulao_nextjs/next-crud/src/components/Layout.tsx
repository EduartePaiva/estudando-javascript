import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={`
            flex flex-col w-2/3
            text-gray-800 
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6 bg-white rounded-b-md">{props.children}</div>
        </div>
    )
}