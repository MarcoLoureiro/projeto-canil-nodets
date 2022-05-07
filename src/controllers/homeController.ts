import { Request,Response } from "express";
import { alternateMenu } from "../helpers/menuHelper";
import { Pet } from "../models/pet";

export const home = (req:Request,res:Response) =>{
    let menu = alternateMenu('all');
    let list = Pet.getAllPets();
    res.render('pages/page',{
        menu,
        banner: {
            img:'allanimals.jpg',
            title:'Todos os animais'
        },
        list

    });

}


export const dogs = (req:Request,res:Response) =>{
    let menu = alternateMenu('dogs');
    let list = Pet.getFromType('dog');
    res.render('pages/page',{
        menu,
        banner: {
            img:'banner_dog.jpg',
            title:'Cachorros'
        },
        list
    });

}

export const cats = (req:Request,res:Response) =>{
    let menu = alternateMenu('cats');
    let list = Pet.getFromType('cat');
    res.render('pages/page',{
        menu,
        banner:{
            img: 'banner_cat.jpg',
            title:'Gatos'
        },
        list
    });
}

export const fishes = (req:Request,res:Response) =>{
    let menu = alternateMenu('fishes');
    let list = Pet.getFromType('fish');
    res.render('pages/page',{
        menu,
        banner:{
            img:'banner_fish.jpg',
            title:'Peixes'
        },
        list
    })
}

