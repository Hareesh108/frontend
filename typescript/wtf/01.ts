type Person = {name:string,age:number}

function logPerson(person:Person)  {
    console.log(person);
}

const person:Person = {
    name:"harsh",
    age:20,
    ...{hey:"jh"}
}


logPerson(person)