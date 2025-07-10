const foo: string[] = ["1","2"] as const 

const a = Object.freeze(foo)
 


function bar (thing :(number | string)[]){
    thing.push(3)
    // a.push(3) // wont work
    console.log(thing);
}

bar(foo)

// const x = bar(a) // wont work
const y = bar(a as unknown as (string | number)[]) // works