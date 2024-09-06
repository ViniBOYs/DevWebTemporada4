import { Part } from "./parts";


export const calcTotalCost = (item:ItemCart) => {
    return item.base.cost +
           item.head.cost +
           item.leftArm.cost +
           item.rightArm.cost +
           item.torso.cost;
}

export class ItemCart {
    head: Part = new Part();
    leftArm: Part = new Part();
    rightArm: Part = new Part();
    torso: Part = new Part();
    base: Part = new Part();
    cost: number = 0.0;

    constructor(){
        this.updateCost();
    }

    updateCost(){ // ! Não é uma função... É um Atributo (funções n rodam no pinia)
        this.cost = calcTotalCost(this);
    }
}

export class Cart{
    robots: Array<ItemCart>=[];
}