interface Dimension{
    width:number;
    height:number;
    date?:number;//Optional Doesn't have to implement
    readonly num:Date;//Can only be read
    getArea():number;
}

class Square implements Dimension{
    width:number;
    height:number;
    num:Date;
    constructor(width:number,height:number){
        this.width=width;
        this.height=height;
        this.num=new Date();
    }

    getArea() : number{
        return this.width*this.height;
    }

}

interface SomeFunction{
    (a : number,b : number):number;
}

const addition:SomeFunction=(a,b)=>{
    return a+b;
}

console.log(addition(3,3));

interface Fish<T>{
    val:T;
}

interface GoldFish extends Fish<Number>{
    name:string;
}

class A{
    func(){
        console.log("Inside A");
    }
}
class B extends A{
    func(){
        super.func();
        console.log("Inside B");
    }
}
var b=new B();
console.log(b.func())



// Union Type
// Using union we signify that our variable can contain either number or string
var x: number|string="12345";
console.log(typeof x)
x=12;
console.log(typeof x);