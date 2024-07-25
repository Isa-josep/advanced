import { heroes } from "../data/heroes";

export const promiseComponent  =(elements )=>{
    const renderHero=(hero)=>{
        elements.innerHTML=`<h1>${hero.name}</h1>`;
    }
    const id1='5d86371f1efebc31def272e2d';

    findHero(id1).then(renderHero).catch(console.warn);
}

const findHero= (id)=>{
   return new Promise((resolve , reject)=>{
    console.log('debug')
        const hero=heroes.find(hero=>hero.id===id);
        if(hero){
            resolve(hero);
            return;
        }
        reject('Hero not found');
    });
}
