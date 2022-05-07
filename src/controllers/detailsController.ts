import { Request,Response } from "express"
import { alternateMenu } from "../helpers/menuHelper";
import { Pet } from "../models/pet";

export const details = (req:Request,res:Response) =>{
    let menu = alternateMenu('');
    let imgPet = req.body.imgPet as string;
    let infos = Pet.separateDetails(req.body.infos as string);
    let desc = req.body.description as string;
    let show = false;
    if(req.body.imgPet){
        show = true;
    }
    res.render('pages/details',{
        menu,
        imgPet,
        infos,
        desc,
        show
    });

}
