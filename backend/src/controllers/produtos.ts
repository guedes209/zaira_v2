import { Request, Response } from 'express';
import { Produtos } from '../models/Produtos';

const produtos = async (req: Request, res: Response)=>{
    let produtos = await Produtos.findAll({
        attributes: ['id', 'nome', 'valor_unitario', 'quantidade'],
        raw: true,
        nest: true
    });
    res.json(produtos)
}

const adicionaProduto = async (req: Request, res: Response) => {
    let novoProd = await Produtos.build({
        nome: req.query.nome,
        valor_unitario: req.query.valor_unitario,
        quantidade: req.query.quantidade
    })
    await novoProd.save();
    res.send({novoProd});
}

export {produtos, adicionaProduto};