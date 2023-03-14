import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    let codigo = '0'
    if(typeof(req.query.codigo) === 'string') codigo = req.query.codigo
    let codigo2 = Number.parseInt(codigo)

    res.status(200).json({
        id: codigo2,
        nome: `Maria ${codigo2}`,
        idade: 33,
        email: `eduarte@${codigo2}gmasdail.com`
    })
}