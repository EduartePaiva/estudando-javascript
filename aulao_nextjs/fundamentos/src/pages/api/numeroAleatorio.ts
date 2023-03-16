import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    numero:number,
    palavraAleatoria: string
}

export default function handler(req:NextApiRequest,res:NextApiResponse<Data>){
    
    res.status(200).json(JSON.parse(getDatabaseData()))
}

export function getDatabaseData(){
    return JSON.stringify({
        numero: Math.random(),
        palavraAleatoria: 'Eai seus puto '+ Math.random()
    })
}