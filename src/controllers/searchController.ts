import { Request,Response } from "express";
import { Pet } from "../models/pet";

export const search = (req:Request,res:Response)=>{
    let nome = req.query.nome as string;
    let list = Pet.getFromName(nome);
    res.render('pages/page',{
        list
    });
}


