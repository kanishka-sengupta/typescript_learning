var num:number=21;
var bool:boolean=true;
var items:Array<String>=["Dominos","PizzaHut"];

var vector3:[number,number,number]=[4,1,1];

//Allows us to create predefined constants
enum aiState{
    "Chase"=0,
    "Flee"=1,
    "Idle"=2,
};

console.log(num);
console.log(bool);
items.forEach(item => {
    console.log(item);
});
console.log(vector3);
for(let i = 0; i<=2;i++){
    console.log(`AI states are ${aiState[i]}`)
}