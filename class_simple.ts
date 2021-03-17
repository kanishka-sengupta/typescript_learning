class Dog{
    name : string = "";
    constructor(name:string){
        this.name=name;
    }
}

let dog=new Dog("JRT");

// to borrow object type use typeof
let dog_2:typeof dog;
let dog_3:number;
//Use as for casting or < >
let str:any="31";
console.log((str as string).length);
console.log((<string>str).length);

if(dog instanceof Dog){
    console.log(`${dog.name} is the name`)
}