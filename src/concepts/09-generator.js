
export const genenerateComponent =(elements )=>{
    console.log("component generator")
    const gen = generator();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
}

function* generator(){
    yield 1;
    yield 2;
    yield 3;
    return "sin valores ";
}