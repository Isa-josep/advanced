import { heroes } from "../data/heroes"

export const asyncawaitComponent = async(elements )=>{
    const id1='5d86371f2343e37870b91ef155';
    const id2='5d86371f25a058e5b1c8a65e';
    
    try {
        const hero1= await findHero(id1);
        const hero2= await findHero(id2);
        elements.innerHTML=`${hero1.name} / ${hero2.name}`;
        
    } catch (error) {
        elements.innerHTML=error;
    }

}

const findHero= async (id)=>{
   const hero= heroes.find(hero=>hero.id===id);
    if(!hero){
        throw new Error(`Hero with id ${id} not found`);
    }
    return hero;
}