import { NextApiRequest, NextApiResponse } from "next";

type Data = null

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse){

    if(req.method === 'GET'){
        handleGet(req,res)
    }else{
        res.status(405).send('Erro 405')
    }


    
}

function handleGet(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade: 33,
        email: 'eduarte@gmasdail.com'
    })
}