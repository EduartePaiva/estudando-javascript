export default function Titulo(props:{children:any}){
    return (
        <div className="flex flex-col justify-center ">
            <h1 className="px-5 py-2 text-2xl bg-white rounded-t-md">
                {props.children}
            </h1>
            <hr className="border-2 opacity-0"/>
        </div>
    )
}