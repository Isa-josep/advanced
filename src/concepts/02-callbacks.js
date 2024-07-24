import { heroes } from "../data/heroes"

export const callbackComponent =(elements )=>{
    const id ='5d86371f2343e37870b91ef1';
    findHeroe(id, (idk)=>{
        elements.innerHTML=idk.name;
    });
}

const findHeroe = (id, callback) => {
   const hero= heroes.find(hero=>hero.id===id);
    callback(hero);
}