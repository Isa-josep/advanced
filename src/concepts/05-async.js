import { heroes } from "../data/heroes"

export const asyncComponent =(elements )=>{
    console.log("asyncComponent");
    const id1='5d86371f97c29d020f1e1f6d4';
    
    findHero(id1)
    .then(name=> elements.innerHTML=
        name    
    ).catch(error=>elements.innerHTML=error);
}

const findHero=async(id)=>{
    const hero=heroes.find(hero=>hero.id===id);
    return hero?.name;
}