import { Request, Response } from 'express';
import { User } from '../models/User';
import { sequelize } from '../database/sql';

export const home = async (req: Request, res: Response)=>{
    let users = await User.findAll({
        attributes: ['nome', 'matricula'],
        where: {id: '1'}
    });
    console.log("USUÁRIO: ", JSON.stringify(users));
}