//Optional Parameter using ?
//For default values , = value, optional and default cannot be together
function displayDetails(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }

 displayDetails(123,"John");


 //Any number of args using ... , they just have to be of the same type
 //Non rest parametere are declared before
 function displayNumbers(id:number,...nums:number[]){
     console.log(id);
     nums.forEach(element=>{
         console.log(element);
     });
 }

 displayNumbers(1,10,10,10);


 var myFunction=new Function("a","b","return a*b");
 console.log(myFunction(3,3));